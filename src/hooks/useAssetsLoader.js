// src/hooks/useAssetsLoader.js
import { useState, useLayoutEffect, useRef } from "react";

export function useAssetsLoader({ refsArray = [], timeout = 8000 } = {}) {
    const [isReady, setReady] = useState(false);
    const timerRef = useRef(null);

    useLayoutEffect(() => {
        let pending = 0;
        const cleanUps = [];

        setReady(false);

        if (timerRef.current) {
            clearTimeout(timerRef.current);
            timerRef.current = null;
        }

        const elements = (refsArray || [])
            .map(item => {
                if (!item) return null;

                if (typeof item === "object" && "current" in item) return item.current;

                return item;
            })
            .filter(Boolean);

        function markLoaded() {
            pending = Math.max(0, pending - 1);
            if (pending === 0) {
                if (timerRef.current) {
                    clearTimeout(timerRef.current);
                    timerRef.current = null;
                }
                setReady(true);
            }
        }

        elements.forEach(el => {
            const tag = (el.tagName || "").toLowerCase();

            if (tag === "img") {
                if (el.complete && el.naturalWidth !== 0) {
                    return;
                }

                pending++;
                const onLoad = () => markLoaded();
                const onError = () => markLoaded();

                el.addEventListener("load", onLoad, { once: true });
                el.addEventListener("error", onError, { once: true });

                cleanUps.push(() => {
                    try {
                        el.removeEventListener("load", onLoad);
                        el.removeEventListener("error", onError);
                    } catch (e) { }
                });
            } else if (tag === "video") {
                if (el.readyState >= 1 && !isNaN(el.duration)) {
                    return;
                }

                pending++;
                const onLoadedMeta = () => markLoaded();
                const onError = () => markLoaded();

                el.addEventListener("loadedmetadata", onLoadedMeta, { once: true });
                el.addEventListener("error", onError, { once: true });

                cleanUps.push(() => {
                    try {
                        el.removeEventListener("loadedmetadata", onLoadedMeta);
                        el.removeEventListener("error", onError);
                    } catch (e) { }
                });
            }
        });

        if (pending === 0) {
            setReady(true);
            return () => {
                cleanUps.forEach(fn => fn());
            };
        }

        timerRef.current = setTimeout(() => {
            timerRef.current = null;
            setReady(true);
        }, timeout);

        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
                timerRef.current = null;
            }
            cleanUps.forEach(fn => fn());
        };
    }, [refsArray, timeout]);

    return { isReady };
}
