import React, { useState, useEffect, useRef } from "react";

function CustomVideoPlayer(props) {

	const videoContainerRef = useRef(null);
	const videoRef = useRef(null);
	const videoScreenControlContainersRef = useRef([]);
	const fullscreenIconRef = useRef(null);
	const videoWidthIconRef = useRef(null);
	const videoDurationCounterRef = useRef(null);
	const videoPlayControlRef = useRef(null);
	const videoPlayControlSmallRef = useRef(null);
	const progressBarRef = useRef(null);


	const [metadataLoaded, setMetadataLoaded] = useState(false);
	const [videoCurrentTime, updateVideoCurrentTime] = useState(0);
	const [videoDuration, updateVideoDuration] = useState(0);
	const [screenMode, setScreenMode] = useState("small");

	function formatTime(time) {
		if (!metadataLoaded || isNaN(time)) return "0:00";
		const minutes = Math.floor(time / 60);
		const seconds = Math.floor(time % 60);
		return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
	}

	function getFullscreenElement() {
		return document.fullscreenElement || document.webkitIsFullscreen
			|| document.mozFullscreenElement || document.msFullscreenElement;
	}

	function toggleFullscreenMode() {
		try {
			const video = videoRef.current;
	
			if (getFullscreenElement()) {
				document.exitFullscreen();
				video?.webkitExitFullscreen?.();
			} else {
				if (video.requestFullscreen) {
					video.requestFullscreen();
				} else if (video.webkitRequestFullscreen) { 
					video.webkitRequestFullscreen(); 
				} else if (video.webkitEnterFullscreen) { 
					video.webkitEnterFullscreen();
				}
			}
		} catch (error) {
			console.error("Error activating Fullscreen mode:", error);
		}
	}
	

	useEffect(() => {
		const video = videoRef.current
		const videoScreenControlContainers = videoScreenControlContainersRef.current.filter(Boolean);
		const fullscreenChangeEvents = [
			'fullscreenchange',
			'webkitfullscreenchange',
			'mozfullscreenchange',
			'MSFullscreenChange'
		];

		const handleMetadata = () => {
			updateVideoDuration(video.duration);
			setMetadataLoaded(true);
		};

		const updateControlsToPaused = () => {
			videoPlayControlRef.current?.classList.remove('playing');
			videoPlayControlRef.current?.classList.add('paused');
			videoPlayControlSmallRef.current?.classList.remove('playing');
			videoPlayControlSmallRef.current?.classList.add('paused');
	
			videoScreenControlContainers.forEach(container => {
				container.classList.remove('playing');
				container.classList.add('paused');
			});
		};

		const handleEnded = () => {
			updateControlsToPaused();
		};

		const handleFullscreenChange = () => {
			setTimeout(() => {
				if (video && video.paused) {
					updateControlsToPaused();
				}
			}, 200);
		};
	
		fullscreenChangeEvents.forEach(event =>
			document.addEventListener(event, handleFullscreenChange)
		);

		if (video) {
			video.addEventListener('loadedmetadata', handleMetadata);
			video.addEventListener('ended', handleEnded);
		}

		return () => {
			video.removeEventListener('loadedmetadata', handleMetadata);
			video.removeEventListener('ended', handleEnded)

			fullscreenChangeEvents.forEach(event =>
				document.removeEventListener(event, handleFullscreenChange));
		}
	}, []);

	useEffect(() => {
		const videoContainer = videoContainerRef.current
		const video = videoRef.current
		const videoScreenControlContainers = videoScreenControlContainersRef.current.filter(Boolean);
		const durationCounter = videoDurationCounterRef.current;

		if (video) {
			video.addEventListener("timeupdate", updateTime);
		}

		if (durationCounter) {
			updateVideoCurrentTime(video.currentTime);
			updateVideoDuration(video.duration);

			durationCounter.textContent = `${formatTime(videoCurrentTime)}/${formatTime(videoDuration)}`;
		};

		function updateTime() {
			updateVideoCurrentTime(video.currentTime);
			updateVideoDuration(video.duration);

			if (durationCounter) {
				durationCounter.textContent = `${formatTime(videoCurrentTime)}/${formatTime(videoDuration)}`;
			};
		}

		function handleScreenMode(event) {
			const targetScreenControl = event.currentTarget;
			const header = document.querySelector('header');

			if (videoContainer && targetScreenControl && header) {
				if (targetScreenControl.classList.contains("max-width")) {
					setScreenMode("max-width")

					targetScreenControl.classList.remove("max-width");
					targetScreenControl.classList.add("min-width");
				} else if (targetScreenControl.classList.contains("min-width")) {
					setScreenMode("small")

					targetScreenControl.classList.remove("min-width");
					targetScreenControl.classList.add("max-width");
				}
			}
		}

		videoScreenControlContainers.forEach(screenControl => {
			screenControl.addEventListener('click', handleScreenMode);
		});

		return () => {
			if (video) {
				video.removeEventListener('timeupdate', updateTime);
			}
			if (videoScreenControlContainers)
				videoScreenControlContainers.forEach(screenControlContainer => {
					screenControlContainer.removeEventListener('click', handleScreenMode);
				});
		}
	}, [videoCurrentTime, videoDuration, metadataLoaded, screenMode]);

	const progressBarWidth = videoDuration ? (videoCurrentTime / videoDuration) * 100 : 0;

	useEffect(() => {

		const videoPlayControl = videoPlayControlRef.current;
		const videoPlayControlSmall = videoPlayControlSmallRef.current;
		const videoScreenControlContainers = videoScreenControlContainersRef.current.filter(Boolean);
		const video = videoRef.current;

		if (video) {
			videoPlayControl.addEventListener('click', playManager);
			videoPlayControlSmall.addEventListener("click", playManager);
			video.addEventListener("click", showControls);
		}

		function showControls() {
			videoPlayControl.classList.add('show');

			videoScreenControlContainers.forEach(
				screenControl => {
					screenControl.classList.add('show');
				}
			);

			setTimeout(() => {
				videoPlayControl.classList.remove('show')

				videoScreenControlContainers.forEach(
					screenControlContainer => {
						screenControlContainer.classList.remove('show');
					}
				);
			}, 1000);
		}

		const updateControlsToPlaying = () => {
			videoPlayControl.classList.remove('paused');
			videoPlayControl.classList.add('playing');
			videoPlayControlSmall.classList.remove('paused');
			videoPlayControlSmall.classList.add('playing');
	
			videoScreenControlContainers.forEach(container => {
				container.classList.remove('paused');
				container.classList.add('playing');
			});
		};
	
		const updateControlsToPaused = () => {
			videoPlayControl.classList.remove('playing');
			videoPlayControl.classList.add('paused');
			videoPlayControlSmall.classList.remove('playing');
			videoPlayControlSmall.classList.add('paused');
	
			videoScreenControlContainers.forEach(container => {
				container.classList.remove('playing');
				container.classList.add('paused');
			});
		};

		function playManager() {
			if (video.paused) {
				video.play();
			} else {
				video.pause();
			}
		}

		video.addEventListener('play', updateControlsToPlaying);
		video.addEventListener('pause', updateControlsToPaused);
		video.addEventListener('ended', updateControlsToPaused);

		return () => {
			if (video)
				video.removeEventListener('click', showControls);
			if (videoPlayControl)
				videoPlayControl.removeEventListener('click', playManager)
			if (videoPlayControlSmall)
				videoPlayControlSmall.removeEventListener('click', playManager);
		}

	}, []);

	useEffect(() => {
		const video = videoRef.current;
		const progressBar = progressBarRef.current;

		const preventDefault = (e) => e.preventDefault();
	
		function seek(event) {
			if (!video || !progressBar) return;
	
			const rect = progressBar.getBoundingClientRect();
			const offsetX = event.type.includes("touch") ? event.touches[0].clientX - rect.left : event.clientX - rect.left;
			const percentage = Math.max(0, Math.min(1, offsetX / rect.width));
			video.currentTime = percentage * video.duration;
		}
	
		function startSeek(event) {
			document.body.classList.add("no-vertical-scroll");
			
			let scrollPosition = window.scrollY || document.documentElement.scrollTop;

			// 1. Bloquear scroll
			document.documentElement.style.overflow = 'hidden';
			document.body.classList.add('disable-scroll');
			document.body.style.top = `-${scrollPosition}px`;
		
			// 2. Bloquear gestos táctiles en toda la página
			document.addEventListener('touchmove', preventDefault, { passive: false });
			document.addEventListener('wheel', preventDefault, { passive: false });
		

			seek(event);

			document.addEventListener("mousemove", seek);
			document.addEventListener("touchmove", seek);
			document.addEventListener("mouseup", stopSeek);
			document.addEventListener("touchend", stopSeek);

			stopSeek.scrollPosition = scrollPosition;
		}
	
		function stopSeek() {
			document.body.classList.remove("no-vertical-scroll");

			// Restaurar scroll
			document.documentElement.style.overflow = '';
			document.body.classList.remove('disable-scroll');
			document.removeEventListener('touchmove', preventDefault);
			document.removeEventListener('wheel', preventDefault);
			document.body.style.top = '';
			window.scrollTo({
				top: stopSeek.scrollPosition || 0,
				behavior: "instant"
			});
			  

			document.removeEventListener("mousemove", seek);
			document.removeEventListener("touchmove", seek);
			document.removeEventListener("mouseup", stopSeek);
			document.removeEventListener("touchend", stopSeek);
		}
		
		if (!progressBar) return;

		progressBar.addEventListener("mousedown", startSeek);
		progressBar.addEventListener("touchstart", startSeek);
	
		return () => {
			if (progressBar) {
				progressBar.removeEventListener("mousedown", startSeek);
				progressBar.removeEventListener("touchstart", startSeek);
			}
		};
	}, []);

	return (
		<div id="fullscreen" className={`video-container ${screenMode}`}
			ref={videoContainerRef}>
			<div className="controls paused" ref={videoPlayControlRef}></div>
			<video
				ref={videoRef}
				autoPlay
				muted
				playsInline
				webkit-playsinline="true"
				className={`video-container ${screenMode}-video`}
				src={`${import.meta.env.BASE_URL}/assets/videos/${props.video}`}
				preload="metadata"
				poster={`${import.meta.env.BASE_URL}/assets/imgs/${props.poster}`}
			/>
			<div
				className="screen-control-container maximize paused"
				ref={el => (videoScreenControlContainersRef.current[0] = el)}
				onClick={toggleFullscreenMode}>
				<div className="screen-control fullscreen-icon" ref={fullscreenIconRef}></div>
			</div>
			<div
				className="screen-control-container max-width paused"
				ref={el => (videoScreenControlContainersRef.current[1] = el)}>
				<div className="screen-control video-width-icon" ref={videoWidthIconRef}></div>
			</div>
			<div className="video-bottom">
				<div
					className="smallerControls paused"
					ref={videoPlayControlSmallRef}>
				</div>
				<div className="video-duration-bar" ref={progressBarRef}>
					<div className="video-progress-bar" style={{ width: `${progressBarWidth}%` }}></div>
				</div>
				<div className="time">{formatTime(videoCurrentTime)}/{formatTime(videoDuration)}</div>
			</div>
		</div>
	);

}

export default CustomVideoPlayer;