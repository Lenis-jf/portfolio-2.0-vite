// src/App.jsx

import React, { useEffect, useRef, useMemo, useLayoutEffect, useState } from 'react';
import Home from './pages/Home';
import Work from './pages/Work';
import About from './pages/About';
import Contact from './pages/Contact';
import ProjectPage from './pages/ProjectPage';
import Header from './components/Header';
import Loader from './components/Loader';
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
	const [homeReady, setHomeReady] = useState(false);
	const [workReady, setWorkReady] = useState(false);
	const [contactReady, setContactReady] = useState(false);
	const [aboutReady, setAboutReady] = useState(false);
	const [projectPageReady, setProjectPageReady] = useState(false);

	const headerRef = useRef(null);
	const logoContainerRef = useRef(null);

	const homeSectionRef = useRef(null);
	const projectsSectionRef = useRef(null);
	const abilitiesSectionRef = useRef(null);
	const lastPartSectionRef = useRef(null);

	const contactRef = useRef(null);

	const workRef = useRef(null);

	const aboutPageRef = useRef(null);

	const projectPageRef = useRef(null);

	const homeObserverRef = useRef(null);
	const genericObserverRef = useRef(null);

	const sectionRefsObject = useMemo(() => ({
		homeSectionRef: homeSectionRef,
		projectsSectionRef: projectsSectionRef,
		abilitiesSectionRef: abilitiesSectionRef,
		lastPartSectionRef: lastPartSectionRef,
		workRef: workRef
	}), [
		homeSectionRef,
		projectsSectionRef,
		abilitiesSectionRef,
		lastPartSectionRef,
		workRef
	]);

	const [isDarkMode, toggleDarkMode] = useDarkMode(Object.values(sectionRefsObject), headerRef);


	function createHomeObserver({ logoContainerRef }) {
		const observerOptions = { root: null, threshold: 0.2 };

		const sectionObserver = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				if(entry.isIntersecting) {
					const id = entry.target.id;
					localStorage.setItem("lastSection", id);

					entry.target.classList.remove("hidden");
					entry.target.classList.add("visible");

					if((id === "home" || id === "last-part" && logoContainerRef.current)) {
						logoContainerRef.current.classList.add("hidden");
					} else if(logoContainerRef.current) {
						logoContainerRef.current.classList.remove("hidden");
					}
				}
			});
		}, observerOptions);

		return sectionObserver;
	}

	function createGenericObserver() {
		const observerOptions = { root: null, threshold: 0 };
		
		const sectionObserver = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				if(entry.isIntersecting) {
					entry.target.classList.remove("hidden");
					entry.target.classList.add("visible");
				}
			});
		}, observerOptions);

		return sectionObserver;
	}

	function initializeObserver(observer, refsArray) {
		const sections = refsArray.map(ref => ref.current).filter(Boolean);
		sections.forEach(section => observer.observe(section));
	}

	function disconnectObserver(observer) {
		if(observer)
			observer.disconnect();		
	}

	useEffect(() => {
		if(location.pathname === "/") {
			if(homeReady) {	
				disconnectObserver(homeObserverRef.current);

				const sectionChangers = document.querySelectorAll('div.section-changer');

				function goToSection(event) {
					const targetClasses = ["projects", "abilities", "home", "last-part"];
					const target = event.target.closest('.section-changer');
					let matchedClass = null;
					if (target)
						matchedClass = targetClasses.find(targetClass => target.classList.contains(targetClass));
					if (matchedClass)
						document.getElementById(matchedClass).scrollIntoView();
				}

				sectionChangers.forEach(sectionChanger => {
					sectionChanger.addEventListener('click', goToSection);
				});

				const observer = createHomeObserver({ logoContainerRef });
				homeObserverRef.current = observer;

				const sectionsRefsArray = Object.values(sectionRefsObject);
				initializeObserver(observer, sectionsRefsArray);

				return () => {
					disconnectObserver(observer);
		
					if (sectionChangers) {
						sectionChangers.forEach(sectionChanger => {
							sectionChanger.removeEventListener('click', goToSection);
						});
					}
				};
			}
		}
	}, [location.pathname, homeReady]);

	useEffect(() => {
		if(location.pathname !== "/") {
			const pageIsReady = workReady || contactReady || aboutReady || projectPageReady;

			if(pageIsReady) {
				disconnectObserver(genericObserverRef.current);

				const observer = createGenericObserver();
				genericObserverRef.current = observer;

				const refs = [workRef, contactRef, aboutPageRef, projectPageRef];
				initializeObserver(observer, refs);

				return () => disconnectObserver(observer);
			}
		}
	}, [location.pathname, 
		workReady, 
		contactReady, 
		aboutReady, 
		projectPageReady]);

	useEffect(() => {
		if (location.pathname.startsWith("/loader") && headerRef.current)
			headerRef.current.style.opacity = 0;
	}, [location, headerRef]);

	return (
		<>
			<Header
				isDarkMode={isDarkMode}
				toggleDarkMode={toggleDarkMode}
				// menuColor={menuColor}
				headerRef={headerRef}
				logoContainerRef={logoContainerRef}
			/>
			<Routes>
				<Route path="/" element={
					<Home
						sectionRefs={sectionRefsObject}
						isDarkMode={isDarkMode}
						onHomeReady={setHomeReady}
					/>
				} />
				<Route path="/work" element={
					<Work
						workRef={workRef}
						onWorkReady={setWorkReady}
						isDarkMode={isDarkMode}
					/>
				} />
				<Route path="/contact" element={
					<Contact
						contactRef={contactRef}
						onContactReady={setContactReady}
					/>
				} />
				<Route path="/about" element={
					<About
						aboutPageRef={aboutPageRef}
						onAboutReady={setAboutReady}
					/>
				} />
				<Route path="/projects/:projectId" element={
					<ProjectPage
						projectPageRef={projectPageRef}
						headerRef={headerRef}
						isDarkMode={isDarkMode}
						onProjectPageReady={setProjectPageReady}
					/>
				} />
				<Route path="/loader" element={<Loader />} />
			</Routes>
		</>
	);
}

export default App;
