import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const getInitialDarkMode = () => {
	const storedValue = localStorage.getItem('isDarkMode');
	const deviceDarkModeOn = window.matchMedia('(prefers-color-scheme: dark)').matches;

	if (storedValue !== null) {
		console.log("Modo pre almacenado personalizado del usuario");

		return JSON.parse(storedValue);
	}

	console.log("Ningun modo preestablecido por el usuario");

	return deviceDarkModeOn;
};

export function useDarkMode(sectionRefs = [], headerRef) {
	const location = useLocation();

	const [isDarkMode, setIsDarkMode] = useState(getInitialDarkMode());

	const toggleDarkMode = () => {
		const newValue = !isDarkMode;
		setIsDarkMode(newValue);
		localStorage.setItem('isDarkMode', JSON.stringify(newValue));
	};

	useEffect(() => {
		const root = document.documentElement;

		if (isDarkMode) {
			root.classList.add("dark-theme");
		} else {
			root.classList.remove("dark-theme");
		}
	}, [isDarkMode]);

	useEffect(() => {
		if (!window.matchMedia) return;

		const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

		const handleChange = (e) => {
			setIsDarkMode(e.matches);
		};

		mediaQuery.addEventListener("change", handleChange);

		return () => {
			mediaQuery.removeEventListener("change", handleChange);
		};
	}, []);

	useEffect(() => {
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

		applyThemeToSections(isDarkMode);
	}, [isDarkMode, location, sectionRefs]);

	useEffect(() => {
		if (isDarkMode) {
			headerRef.current?.classList.remove("light-section");
			headerRef.current?.classList.add("dark-theme");
		} else {
			headerRef.current?.classList.remove("dark-theme");
			headerRef.current?.classList.add("light-section");
		}

	}, [isDarkMode, location, headerRef]);

	useEffect(() => {
		const sectionChangers = document.querySelectorAll('div.section-changer');

		if (isDarkMode) {
			sectionChangers.forEach(sectionChanger => {
				if (sectionChanger.classList.contains("section-changer-dark")) {
					sectionChanger.classList.remove('section-changer-dark');
					sectionChanger.classList.add('section-changer-light');
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