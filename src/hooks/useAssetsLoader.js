// src/hooks/useAssetsLoader.js
import { useState, useLayoutEffect, useRef } from "react";

function resolveDomNode(maybeRefOrNode) {
    if (!maybeRefOrNode) return null;
    if (typeof maybeRefOrNode === "object" && "current" in maybeRefOrNode) return maybeRefOrNode.current;
    return maybeRefOrNode;
}

function extractUrlsFromCssBackgroundImage(backgroundImageValue) {
    if (!backgroundImageValue || backgroundImageValue === "none") return [];

    const urls = [];
    const re = /url\((['"]?)(.*?)\1\)/g;
    let match;
    while ((match = re.exec(backgroundImageValue)) !== null) {
        const raw = (match[2] || "").trim();
        if (!raw) continue;
        if (raw.startsWith("data:")) continue;
        urls.push(raw);
    }
    return urls;
}

function stableWatchKey(watch) {
    if (!watch) return "";
    if (Array.isArray(watch)) {
        return watch.map(v => String(v)).join("|");
    }
    return String(watch);
}

export function useAssetsLoader({
    refsArray = null,
    root = null,
    includeBackgroundImages = true,
    timeout = 8000,
    watch = [],
} = {}) {
    const [isReady, setReady] = useState(false);
    const timerRef = useRef(null);
    const watchKey = stableWatchKey(watch);

    useLayoutEffect(() => {
        let pending = 0;
        const cleanUps = [];

        setReady(false);

        if (timerRef.current) {
            clearTimeout(timerRef.current);
            timerRef.current = null;
        }

        const rootEl = resolveDomNode(root);
        const fromRefs = Array.isArray(refsArray) ? refsArray.map(resolveDomNode).filter(Boolean) : [];

        const fromRoot = [];
        if (rootEl && typeof rootEl.querySelectorAll === "function") {
            fromRoot.push(rootEl);
            rootEl.querySelectorAll("img,video").forEach(el => fromRoot.push(el));
        }

        const elements = Array.from(new Set([...fromRefs, ...fromRoot].filter(Boolean)));

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

        function trackImageUrl(url) {
            if (!url) return;

            pending++;
            const img = new Image();
            const onDone = () => markLoaded();

            img.onload = onDone;
            img.onerror = onDone;
            img.src = url;

            cleanUps.push(() => {
                try {
                    img.onload = null;
                    img.onerror = null;
                } catch (e) { }
            });
        }

        // 1) Track <img> and <video>
        elements.forEach(el => {
            const tag = (el.tagName || "").toLowerCase();

            if (tag === "img") {
                // Lazy images can delay loading; we proactively preload their URL.
                const isLazy = (el.getAttribute?.("loading") || "").toLowerCase() === "lazy";
                const alreadyLoaded = el.complete && el.naturalWidth !== 0;

                if (alreadyLoaded) return;

                if (isLazy) {
                    const preloadUrl = el.currentSrc || el.src;
                    trackImageUrl(preloadUrl);
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
            }

            if (tag === "video") {
                const metadataReady = el.readyState >= 1 && !isNaN(el.duration);
                if (!metadataReady) {
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

                // also track poster image if present
                const posterUrl = el.getAttribute?.("poster") || el.poster;
                if (posterUrl) {
                    trackImageUrl(posterUrl);
                }
            }
        });

        // 2) Track background-image URLs (CSS icons, etc.)
        if (includeBackgroundImages && rootEl && typeof rootEl.querySelectorAll === "function") {
            const bgUrls = new Set();
            const nodes = [rootEl, ...Array.from(rootEl.querySelectorAll("*"))];
            nodes.forEach(node => {
                try {
                    const style = window.getComputedStyle(node);
                    const urls = extractUrlsFromCssBackgroundImage(style.backgroundImage);
                    urls.forEach(u => bgUrls.add(u));
                } catch (e) { }
            });

            bgUrls.forEach(url => trackImageUrl(url));
        }

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
    }, [refsArray, root, includeBackgroundImages, timeout, watchKey]);

    return { isReady };
}
