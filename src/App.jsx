// src/App.jsx

import React, { useEffect, useRef, useMemo } from 'react';
import Home from './pages/Home';
import Work from './pages/Work';
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
	const logoContainerRef = useRef(null);

	const homeSectionRef = useRef(null);
	const projectsSectionRef = useRef(null);
	const abilitiesSectionRef = useRef(null);
	const lastPartSectionRef = useRef(null);

	const aboutPageRef = useRef(null);
	
	const projectPageRef = useRef(null);

	const sectionRefsObject = useMemo(() => ({
		homeSectionRef: homeSectionRef,
		projectsSectionRef: projectsSectionRef,
		abilitiesSectionRef: abilitiesSectionRef,
		lastPartSectionRef: lastPartSectionRef
	}), [
		homeSectionRef,
		projectsSectionRef,
		abilitiesSectionRef,
		lastPartSectionRef
	]);

	const [isDarkMode, toggleDarkMode] = useDarkMode(Object.values(sectionRefsObject), headerRef);

	const menuColor = useMenuColor(Object.values(sectionRefsObject), isDarkMode);

	useEffect(() => {
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

		const sectionsRefsArray = Object.values(sectionRefsObject);
		const allSectionRefs = [...sectionsRefsArray, projectPageRef, aboutPageRef];
		const sections = allSectionRefs.map(ref => ref.current).filter(ref => ref !== null);

		const observerOptions = {
			root: null,
			threshold: 0.2
		};

		const sectionObserver = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					const id = entry.target.id;
					localStorage.setItem('lastSection', id);

					entry.target.classList.remove('hidden');
					entry.target.classList.add('visible');

					if((id === "home" || id === "last-part") && logoContainerRef.current)
						logoContainerRef.current.classList.add("hidden");
					else if(logoContainerRef.current)
						logoContainerRef.current.classList.remove("hidden");
				}
			});
		}, observerOptions);

		sections.forEach(section => {
			sectionObserver.observe(section);
		});

		const lastSection = localStorage.getItem('lastSection');
		const initialSection = lastSection || 'home';
		
		if (logoContainerRef.current) {
			if (initialSection === "home" || initialSection === "last-part") {
				logoContainerRef.current.classList.add("hidden");
			} else {
				logoContainerRef.current.classList.remove("hidden");
			}
		}

		return () => {
			sectionObserver.disconnect();
			if (sectionChangers) {
				sectionChangers.forEach(sectionChanger => {
					sectionChanger.removeEventListener('click', goToSection);
				});
			}
		}
	}, [location, sectionRefsObject, logoContainerRef, projectPageRef, aboutPageRef]);

	return (
		<>
			<Header 
				isDarkMode={isDarkMode} 
				toggleDarkMode={toggleDarkMode} 
				menuColor={menuColor} 
				headerRef={headerRef} 
				logoContainerRef={logoContainerRef} 
			/>
			<Routes>
				<Route path="/" element={
					<Home
					    sectionRefs={sectionRefsObject}
						isDarkMode={isDarkMode}
					/>
				} />
				<Route path="/work" element={<Work />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/about" element={
					<About 
						aboutPageRef={aboutPageRef}
					/>
				} />
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