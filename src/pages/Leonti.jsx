import React, { useEffect } from "react";
import CustomImageSlider from "../components/CustomImageSlider";
import CustomVideoPlayer from "../components/CustomVideoPlayer";

function Leonti() {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "instant"
        });
    }, []);

    return (
        <div className="main-content">
            <section id="leonti" className="section light-section project-info">
                <h2>Leonti Aesthetic — Cosmetic Studio Landing</h2>

                <CustomImageSlider
                    images={[
                        `${import.meta.env.BASE_URL}/assets/imgs/leonti-assets/leonti-img-1.webp`,
                        `${import.meta.env.BASE_URL}/assets/imgs/leonti-assets/leonti-img-2.webp`,
                        `${import.meta.env.BASE_URL}/assets/imgs/leonti-assets/leonti-img-3.webp`,
                        `${import.meta.env.BASE_URL}/assets/imgs/leonti-assets/leonti-img-4.webp`,
                        `${import.meta.env.BASE_URL}/assets/imgs/leonti-assets/leonti-img-5.webp`,
                        `${import.meta.env.BASE_URL}/assets/imgs/leonti-assets/leonti-img-6.webp`,
                        `${import.meta.env.BASE_URL}/assets/imgs/leonti-assets/leonti-img-7.webp`,
                        `${import.meta.env.BASE_URL}/assets/imgs/leonti-assets/leonti-img-9.webp`,
                        `${import.meta.env.BASE_URL}/assets/imgs/leonti-assets/leonti-img-10.webp`,
                        `${import.meta.env.BASE_URL}/assets/imgs/leonti-assets/leonti-img-11.webp`,
                        `${import.meta.env.BASE_URL}/assets/imgs/leonti-assets/leonti-img-12.webp`,
                        `${import.meta.env.BASE_URL}/assets/imgs/leonti-assets/leonti-img-13.webp`,
                        `${import.meta.env.BASE_URL}/assets/imgs/leonti-assets/leonti-img-14.webp`,
                        `${import.meta.env.BASE_URL}/assets/imgs/leonti-assets/leonti-img-15.webp`
                    ]}
                />

                <p>
                    A compact, conversion-focused landing page I built for a professional cosmetician who opened a studio and needed a polished online presence to showcase services, products, pricing and a gallery of real work — all inside this portfolio case.
                </p>

                <a href="https://github.com/Lenis-jf/leonti-aesthetic" className="button">Show Repository</a>

                <p>
                    The site highlights services (facials, lashes, brows, packages), transparent pricing, and a featured partnership with <strong>CNC Shop</strong>, whose products the studio recommends. I added clear product callouts and links to simplify discovery for visitors.
                </p>

                <p>
                    Technically I kept the app fast and maintainable: componentized React sections (services, gallery, pricing, partner) and optimized images for web delivery. I automated repeatable tasks with small scripts and Java utilities to speed up builds and asset handling.
                </p>

                <p>
                    I also integrated Google Maps to improve location discovery and used Google Search Console to set up basic analytics — then taught my client how to read those reports so she can track visits and performance. For deployment and file management we used SFTP to administer assets on the hosting server.
                </p>

                <a href="https://www.aesthetic-leonti.de" className="button">Visit Website</a>

                <CustomVideoPlayer
                    video="leonti-project.mp4"
                    poster="leonti-assets/leonti-img-1.webp"
                />

                <p>
                    Working hand-in-hand with a designer in Figma was rewarding: we iterated on layouts and translated the mockups into reusable components. The collaboration sharpened my design sensibilities and improved Figma-to-React handoffs.
                </p>

                <CustomImageSlider
                    images={[
                        `${import.meta.env.BASE_URL}/assets/imgs/leonti-assets/leonti-img-16.webp`,
                        `${import.meta.env.BASE_URL}/assets/imgs/leonti-assets/leonti-img-17.webp`,
                        `${import.meta.env.BASE_URL}/assets/imgs/leonti-assets/leonti-img-18.webp`
                    ]}
                />

                <p>
                    The project taught me a lot about image optimization, automation, and splitting UI into clean components. My client was happy with the result, and I left the project more curious and ready to keep improving performance and UX.
                </p>

                <span className="copy-right">© juanfelenis 2025</span>
            </section>
        </div>
    );
}

export default Leonti;
