import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useDarkMode(sectionRefs = [], headerRef) {
    const location = useLocation();

    const [isDarkMode, setIsDarkMode] = useState(() => {
        return localStorage.getItem("dark-theme") === "true";
    });

    const toggleDarkMode = () => {
        setIsDarkMode(prev => !prev);
    };

    useEffect(() => {
        const root = document.documentElement;

        localStorage.setItem("dark-theme", isDarkMode.toString());

        if (isDarkMode) {
            root.classList.add("dark-theme");
        } else {
            root.classList.remove("dark-theme");
        }
    }, [isDarkMode]);

    useEffect(() => {
        // Obtenemos las secciones válidas de las referencias
        const sections = sectionRefs.filter(ref => ref.current);

        const applyThemeToSections = (darkMode) => {
            sections.forEach(ref => {
                if (darkMode) {
                    ref.current.classList.add('dark-theme');
                } else {
                    ref.current.classList.remove('dark-theme');
                }
            });
        };

        // Aplicamos el tema a las secciones cuando cambia el modo oscuro o la ubicación
        applyThemeToSections(isDarkMode);

    }, [isDarkMode, location, sectionRefs]);

    useEffect(() => {
        if(isDarkMode) {
            headerRef.current?.classList.remove("ligt-section");
            headerRef.current?.classList.add("dark-theme");
        } else {
            headerRef.current?.classList.remove("dark-theme");
            headerRef.current?.classList.add("light-section"); 
        }

    }, [isDarkMode, location, headerRef]);
    
    useEffect(() => {
        const sectionChangers = document.querySelectorAll('div.section-changer');

        if(isDarkMode) {
            sectionChangers.forEach(sectionChanger => {
				if (sectionChanger.classList.contains("section-changer-dark")) {
					sectionChanger.classList.remove('section-changer-dark');
					sectionChanger.classList.add('section-changer-light');
					sectionChanger.style.marginTop = "100px";
				}
			});
        } else {
            sectionChangers.forEach(sectionChanger => {
				const parentSection = sectionChanger.closest('section');
				if (parentSection && parentSection.classList.contains('light-section')) {
					if (sectionChanger.classList.contains("section-changer-light")) {
						sectionChanger.classList.remove('section-changer-light');
						sectionChanger.classList.add('section-changer-dark');
					}
				}
			}); 
        }

    }, [isDarkMode, location]);

    return [isDarkMode, toggleDarkMode];
}