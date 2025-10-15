import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useMenuColor(sectionRefs, isDarkMode) {
    const location = useLocation();
    const [menuColor, setMenuColor] = useState('brown-color');
    
    const padStart = location.pathname.padStart();

    useEffect(() => {
        if(isDarkMode) { setMenuColor("brown-color"); return;x }
        
        if (padStart.match('/projects/') || padStart.match("/about") || padStart.match('/work')) {
            setMenuColor('brown-color');
        } else {
            setMenuColor('light-color');
        }
    }, [location, isDarkMode]);

    
    useEffect(() => {
        if(isDarkMode) { setMenuColor("brown-color"); return; }

        const sections = sectionRefs.filter(ref => ref.current);
        const observerOptions = {
            root: null,
            threshold: 0.5
        };

        const sectionObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target.classList.contains('light-section')) {
                        setMenuColor('brown-color');
                    } else if (entry.target.classList.contains('dark-section')) {
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
    }, [sectionRefs, isDarkMode]);
    
    return menuColor;
}