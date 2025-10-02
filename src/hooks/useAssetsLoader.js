    import { useState, useEffect } from "react";

    export function useAssetsLoader({refsArray = [], timeout = 8000} = {}) {
        const [isReady, setReady] = useState(false);

        useEffect(() => {

            let pending = 0;
            const cleanUpFunctions = [];
            let timer = null;

            function markLoaded() {
                pending = Math.max(0, pending - 1);

                if(pending === 0) setReady(true);
            }

            refsArray.forEach(ref => {
                const element = ref && ref.current;

                if(!element) return;

                const elementTag = element.tagName.toLowerCase();

                if(elementTag === "img") {
                    if(element.complete && element.naturalWidth !== 0) return;

                    pending++;

                    const onLoadEvent = () => markLoaded();
                    const onErrorEvent = () => markLoaded();

                    element.addEventListener("load", onLoadEvent, {once: true});
                    element.addEventListener("error", onErrorEvent, {once: true});

                    cleanUpFunctions.push(
                        () => {
                            try {
                                if(element) {
                                    element.removeEventListener("load", onLoadEvent);
                                    element.removeEventListener("error", onErrorEvent);
                                }
                            } catch(e) {}
                        }
                    );
                }

                if(elementTag === "video") {
                    if(element.readyState >= 1 && !isNaN(element.duration)) return;

                    pending++;

                    const onLoadMetaEvent = () => markLoaded();
                    const onErrorMetaEvent = () => markLoaded();

                    element.addEventListener("loadedmetadata", onLoadMetaEvent, {once: true});
                    element.addEventListener("error", onErrorMetaEvent, {once: true});

                    cleanUpFunctions.push(
                        () => {
                            try {
                                if(element) {
                                    element.removeEventListener("loadedmetadata", onLoadMetaEvent);
                                    element.removeEventListener("error", onErrorMetaEvent);
                                }
                            } catch(e) {}
                        }
                    );
                }
            });

            timer = setTimeout(() => {
                setReady(true);
            }, timeout);

            return () => {
                if(timer) clearTimeout(timer);

                cleanUpFunctions.forEach((fn) => {
                    fn();
                });
            }
        }, [refsArray]);

        return { isReady };
    }