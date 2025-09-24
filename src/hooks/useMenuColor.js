// src/hooks/useMenuColor.js

import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useMenuColor(sectionRefs, isDarkMode) {
    const location = useLocation();
    const [menuColor, setMenuColor] = useState('brown-color');

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
                    if (entry.target.classList.contains('light-section')) {
                        console.log("light-section");
                        setMenuColor('brown-color');
                    } else if (entry.target.classList.contains('dark-section')) {
                        console.log("dark-section");
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

    }, [sectionRefs,isDarkMode]);

    return menuColor;
}