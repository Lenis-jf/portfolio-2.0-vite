// src/App.jsx

import React, { useEffect, useRef } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ProjectPage from './pages/ProjectPage';
import Header from './components/Header';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';

import { useDarkMode } from './hooks/useDarkMode';
import { useMenuColor } from './hooks/useMenuColor';

function App() {
	return (
		<div>
			<HashRouter>
				<RouterComponent />
			</HashRouter>
		</div>
	);
}

function RouterComponent() {
	const location = useLocation();

	const headerRef = useRef(null);

	const homeSectionRef = useRef(null);
	const projectsSectionRef = useRef(null);
	const abilitiesSectionRef = useRef(null);
	const lastPartSectionRef = useRef(null);
	
	const projectPageRef = useRef(null);

	const [isDarkMode, toggleDarkMode] = useDarkMode([
		homeSectionRef,
		projectsSectionRef,
		abilitiesSectionRef,
		lastPartSectionRef,
		projectPageRef
	], headerRef);

	// ¡Corregido! Ahora pasamos un array de referencias.
	const menuColor = useMenuColor([
		homeSectionRef,
		projectsSectionRef,
		abilitiesSectionRef,
		lastPartSectionRef
	], isDarkMode);

	useEffect(() => {
		// ... Tu lógica de IntersectionObserver para visibilidad y scroll
		const sections = [
			homeSectionRef.current,
			projectsSectionRef.current,
			abilitiesSectionRef.current,
			lastPartSectionRef.current
		].filter(ref => ref);

		const sectionChangers = document.querySelectorAll('div.section-changer');

		function goToSection(event) {
			const targetClasses = ["projects", "abilities", "home", "last-part"];
			const target = event.target.closest('.section-changer');
			var matchedClass = null;
			if (target)
				matchedClass = targetClasses.find(targetClass => target.classList.contains(targetClass));
			if (matchedClass)
				document.getElementById(matchedClass).scrollIntoView();
		}

		sectionChangers.forEach(sectionChanger => { sectionChanger.addEventListener('click', goToSection); });

		const observerOptions = {
			root: null,
			threshold: 0.3
		};

		const sectionObserver = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					const id = entry.target.id;
					localStorage.setItem('lastSection', id);
					entry.target.classList.remove('hidden');
					entry.target.classList.add('visible');
				}
			});
		}, observerOptions);

		sections.forEach(section => {
			sectionObserver.observe(section);
		});

		const lastSection = localStorage.getItem('lastSection');
		if (lastSection && document.getElementById(lastSection)) {
			document.getElementById(lastSection).scrollIntoView();
		} else if (document.getElementById('home')) {
			document.getElementById('home').scrollIntoView();
		}

		return () => {
			sectionObserver.disconnect();
			if (sectionChangers) {
				sectionChangers.forEach(sectionChanger => {
					sectionChanger.removeEventListener('click', goToSection);
				});
			}
		}
	}, [location]);

	return (
		<>
			<Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} menuColor={menuColor} headerRef={headerRef} />
			<Routes>
				<Route path="/" element={
					<Home
						homeSectionRef={homeSectionRef}
						projectsSectionRef={projectsSectionRef}
						abilitiesSectionRef={abilitiesSectionRef}
						lastPartSectionRef={lastPartSectionRef}
						isDarkMode={isDarkMode}
					/>
				} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/about" element={<About />} />
				<Route path="/projects/:projectId" element={
					<ProjectPage 
						projectPageRef={projectPageRef}
					/>
				} />
			</Routes>
		</>
	);
}

export default App;