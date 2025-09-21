import React, { useEffect } from "react";
import CustomVideoPlayer from "./CustomVideoPlayer";

function Dronesim() {
  useEffect(() => {
    // scrollTo: usar 'auto' o 'smooth'
    window.scrollTo({ top: 0, behavior: "auto" });

    const imagesWrapper = document.querySelector('div.images-wrapper');
    const dronesimImages = document.querySelectorAll('div.images-wrapper div.img');
    const radioButtons = document.querySelectorAll('div.radio-button');
    const arrows = document.querySelectorAll('div.arrow');

    if (!imagesWrapper || dronesimImages.length === 0) {
      // Si no existen elementos, no seguimos (evita excepciones)
      return;
    }

    let currentVisibleImageId = null;

    const sliderObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          currentVisibleImageId = entry.target.id;
          // actualizar radios
          radioButtons.forEach(radioButton => {
            const targetId = radioButton.dataset.target;
            radioButton.classList.toggle('active', targetId === currentVisibleImageId);
          });

          // actualizar flechas
          arrows.forEach(arrow => {
            if (currentVisibleImageId === "first-img" && arrow.classList.contains("left-arrow")) {
              arrow.classList.add("unenabled");
            } else if (currentVisibleImageId === "last-img" && arrow.classList.contains("right-arrow")) {
              arrow.classList.add("unenabled");
            } else {
              arrow.classList.remove("unenabled");
            }
          });
        }
      });
    }, { threshold: 0.2 });

    dronesimImages.forEach(image => sliderObserver.observe(image));

    function handleRBClick(event) {
      event.stopPropagation();
      const radio = event.currentTarget;
      const targetId = radio.dataset.target;
      const targetImg = document.getElementById(targetId);
      if (imagesWrapper && targetImg) {
        imagesWrapper.scrollTo({ left: targetImg.offsetLeft, behavior: 'smooth' });
      }
    }

    function handleArrowClick(event) {
      event.stopPropagation();
      const arrow = event.currentTarget;
      const currentImg = document.getElementById(currentVisibleImageId);
      if (!currentImg || !imagesWrapper) return;

      if (arrow.classList.contains('left-arrow') && currentVisibleImageId !== "first-img") {
        const previousImg = currentImg.previousElementSibling;
        if (previousImg) imagesWrapper.scrollTo({ left: previousImg.offsetLeft, behavior: 'smooth' });
      } else if (arrow.classList.contains('right-arrow') && currentVisibleImageId !== "last-img") {
        const nextImg = currentImg.nextElementSibling;
        if (nextImg) imagesWrapper.scrollTo({ left: nextImg.offsetLeft, behavior: 'smooth' });
      }
    }

    radioButtons.forEach(rb => rb.addEventListener('click', handleRBClick));
    arrows.forEach(a => a.addEventListener('click', handleArrowClick));

    return () => {
      sliderObserver.disconnect();
      radioButtons.forEach(rb => rb.removeEventListener('click', handleRBClick));
      arrows.forEach(a => a.removeEventListener('click', handleArrowClick));
    };
  }, []);

  return (
    <div className="main-content">
      <section id="dronesim" className="section light-section project-info">
        <h2>Drones Simulation</h2>

        <div className="img-presentator-container">
          <div className="left-arrow arrow"></div>

          <div className="images-wrapper">
            <div id="first-img" className="img"></div>
            <div id="img-2" className="img"></div>
            <div id="last-img" className="img"></div>
          </div>

          <div className="right-arrow arrow"></div>
        </div>

        <div className="radio-buttons-container">
          {/* usa data-target en lugar de repetir ids */}
          <div data-target="first-img" className="radio-button first-rb"></div>
          <div data-target="img-2" className="radio-button second-rb"></div>
          <div data-target="last-img" className="radio-button third-rb"></div>
        </div>

        <p>This project was made by me and a team ...</p>
        <a href="https://github.com/Lenis-jf/Drone-Project" className="button">Show Repository</a>
        <p>Our final java application ...</p>
        <CustomVideoPlayer video="dronesim.mp4" poster="dronesim-img-1.png" />
        <p>Besides the API ...</p>
        <span className="copy-right">©juanfelenis 2025</span>
      </section>
    </div>
  );
}

export default Dronesim;
