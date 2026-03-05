// src/App.jsx

import React, { useEffect, useRef, useMemo, useLayoutEffect } from 'react';
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
import { useAssetsLoader } from './hooks/useAssetsLoader';

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
	const appShellRef = useRef(null);

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
	const { isReady: shellReady } = useAssetsLoader({
		root: appShellRef,
		includeBackgroundImages: true,
		timeout: 12000,
		watch: [location.pathname],
	});


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
		sections.forEach(section => {
			// IMPORTANT: don't let React own the hidden/visible classes.
			// We set initial state here so rerenders (e.g. darkmode) won't re-add `hidden`.
			section.classList.add("hidden");
			section.classList.remove("visible");
			observer.observe(section);
		});
	}

	function disconnectObserver(observer) {
		if(observer)
			observer.disconnect();		
	}

	useLayoutEffect(() => {
		if(location.pathname === "/") {
			if(shellReady) {	
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
	}, [location.pathname, shellReady]);

	useLayoutEffect(() => {
		if(location.pathname !== "/") {
			if(shellReady) {
				disconnectObserver(genericObserverRef.current);

				const observer = createGenericObserver();
				genericObserverRef.current = observer;

				const refs = [workRef, contactRef, aboutPageRef, projectPageRef];
				initializeObserver(observer, refs);

				return () => disconnectObserver(observer);
			}
		}
	}, [location.pathname, 
		shellReady]);

	useEffect(() => {
		if (location.pathname.startsWith("/loader") && headerRef.current)
			headerRef.current.style.opacity = 0;
	}, [location, headerRef]);

	return (
		<>
			{!shellReady && <Loader />}
			<div ref={appShellRef} aria-busy={!shellReady}>
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
					/>
				} />
				<Route path="/work" element={
					<Work
						workRef={workRef}
						isDarkMode={isDarkMode}
					/>
				} />
				<Route path="/contact" element={
					<Contact
						contactRef={contactRef}
					/>
				} />
				<Route path="/about" element={
					<About
						aboutPageRef={aboutPageRef}
					/>
				} />
				<Route path="/projects/:projectId" element={
					<ProjectPage
						projectPageRef={projectPageRef}
						isDarkMode={isDarkMode}
					/>
				} />
				<Route path="/loader" element={<Loader />} />
			</Routes>
			</div>
		</>
	);
}

export default App;
