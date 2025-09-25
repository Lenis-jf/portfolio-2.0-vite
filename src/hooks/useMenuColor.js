// src/hooks/useMenuColor.js

import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useMenuColor(sectionRefs, isDarkMode, contactCardRef) {
    const lightImg = "assets/icons/contact-card-lightmode.svg";
    const darkImg = "assets/icons/contact-card-darkmode.svg";

    const location = useLocation();
    const [menuColor, setMenuColor] = useState('brown-color');
    const [currentSrc, setCurrentSrc] = useState(darkImg);

    useEffect(() => {
        if(isDarkMode) { return setMenuColor("brown-color"); }

        if (location.pathname.startsWith('/projects/')) {
            setMenuColor('brown-color');
        } else {
            setMenuColor('light-color');
        }
    }, [location, isDarkMode]);

    
    useEffect(() => {
        if(isDarkMode) { return setMenuColor("brown-color"); }

        const sections = sectionRefs.filter(ref => ref.current);
        const observerOptions = {
            root: null,
            threshold: 0.4
        };

        const sectionObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target.classList.contains('light-section') && contactCardRef.current) {
                        // console.log("light-section");
                        setCurrentSrc(lightImg);
                        setMenuColor('brown-color');
                    } else if (entry.target.classList.contains('dark-section') && contactCardRef.current) {
                        // console.log("dark-section");
                        setCurrentSrc(darkImg);
                        setMenuColor('light-color');
                    }
                }
            });
        }, observerOptions);

        sections.forEach(section => {
            sectionObserver.observe(section.current);
        });

        return () => {
            sectionObserver.disconnect();
        };

    }, [sectionRefs, isDarkMode, contactCardRef]);

    useEffect(() => {
        if(isDarkMode) return;

        if(location.pathname.startsWith('/projects/') && contactCardRef.current) {
            setCurrentSrc(darkImg);
        } else if(location.pathname.startsWith('/contact/') && contactCardRef.current) {
            setCurrentSrc(lightImg);
        }
    }, [location, isDarkMode, contactCardRef]);

    return { menuColor, currentSrc };
}