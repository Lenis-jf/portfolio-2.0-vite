const projectsData = [
    {
        id: "dronesim",
        title: "Drones Simulation",
        sectionClass: "light-section",
        content: [
            {
                type: "image", src: [
                    `${import.meta.env.BASE_URL}/assets/imgs/dronesim-assets/dronesim-img-1.png`,
                    `${import.meta.env.BASE_URL}/assets/imgs/dronesim-assets/dronesim-img-2.png`,
                    `${import.meta.env.BASE_URL}/assets/imgs/dronesim-assets/dronesim-img-3.png`
                ]
            },
            { type: "paragraph", text: "My first big Java project! 🚀 Developed for our OOP class, this GUI app taught me the magic of APIs and teamwork. We created different sections to display live drone data from a website provided by our university with search filters and calculated metrics like current battery consumption (yes, we did math for fun!)." },
            { type: "button", text: "Show Repository", url: "https://github.com/Lenis-jf/Drone-Project" },
            { type: "paragraph", text: "The catch? It only worked on campus WiFi! Though challenging, this project made me fall in love with problem-solving. Who knew connecting to an API could feel like cracking a secret code?" },
            { type: "video", video: "dronesim.mp4", poster: "dronesim-assets/dronesim-img-1.png" },
            { type: "paragraph", text: "Looking back, it’s raw and beginner-friendly—exactly how learning should feel. My proudest moment? When our pagination function actually worked!" }
        ]
    },
    {
        id: "cultural-fitness",
        title: "Cultural Fitness",
        sectionClass: "light-section",
        content: [
            {
                type: "image", src: [
                    `${import.meta.env.BASE_URL}/assets/imgs/cultural-fitness-assets/cultural-fitness-img-1.png`,
                    `${import.meta.env.BASE_URL}/assets/imgs/cultural-fitness-assets/cultural-fitness-img-2.png`,
                    `${import.meta.env.BASE_URL}/assets/imgs/cultural-fitness-assets/cultural-fitness-img-3.png`,
                    `${import.meta.env.BASE_URL}/assets/imgs/cultural-fitness-assets/cultural-fitness-img-4.png`,
                    `${import.meta.env.BASE_URL}/assets/imgs/cultural-fitness-assets/cultural-fitness-img-5.png`,
                    `${import.meta.env.BASE_URL}/assets/imgs/cultural-fitness-assets/cultural-fitness-img-6.png`,
                    `${import.meta.env.BASE_URL}/assets/imgs/cultural-fitness-assets/cultural-fitness-img-7.png`,
                ]
            },
            {
                type: "paragraph", text: "Where fitness meets code! 💪 Collaborated with design students to create this gym-inspired site. Our mission? To create a beautiful landing page with different function like a BMI calculator or even a dark mode button!"
            },
            {
                type: "button", text: "Show Repository", url: "https://github.com/Lenis-jf/leonti-aesthetic"
            },
            {
                type: "paragraph", text: "Learned to work with designers’ mockups (turns out \"pixel perfect\" is harder than it sounds!). It is pretty easy to navigate through the different sections and im still proud of the design and amount of usefull information the website has"
            },
            {
                type: "video", video: "cultural-fitness-project.mp4", poster: "/cultural-fitness-assets/cultural-fitness-project.png"
            },
            {
                type: "button", text: "Visit Website", url: "https://lenis-jf.github.io/cultural-fitness/"
            },
            {
                type: "paragraph", text: "Though the business plan fizzled, the code survived! Check out our Figma-to-CSS journey below—it’s like watching a baby bird learn to fly!"
            },
            {
                type: "image", src: [
                    `${import.meta.env.BASE_URL}/assets/imgs/cultural-fitness-assets/cf-figma-img-1.png`,
                    `${import.meta.env.BASE_URL}/assets/imgs/cultural-fitness-assets/cf-figma-img-2.png`,
                    `${import.meta.env.BASE_URL}/assets/imgs/cultural-fitness-assets/cf-figma-img-3.png`,
                ]
            },
            {
                type: "paragraph", text: "Biggest takeaway? Teamwork makes the code work! (And always version control your designs)"
            }
        ]
    },
    {
        id: "leonti",
        title: "Leonti Aesthetic — Cosmetic Studio Landing",
        sectionClass: "light-section",
        content: [
            {
                type: "image", src: [
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
                ]
            },
            { type: "paragraph", text: "A compact, conversion-focused landing page I built for a professional cosmetician who opened a studio and needed a polished online presence to showcase services, products, pricing and a gallery of real work — all inside this portfolio case." },
            { type: "button", text: "Show Repository", url: "https://github.com/Lenis-jf/leonti-aesthetic" },
            { type: "paragraph", text: "The site highlights services (facials, lashes, brows, packages), transparent pricing, and a featured partnership with CNC Shop, whose products the studio recommends. I added clear product callouts and links to simplify discovery for visitors." },
            { type: "paragraph", text: "Technically I kept the app fast and maintainable: componentized React sections (services, gallery, pricing, partner) and optimized images for web delivery. I automated repeatable tasks with small scripts and Java utilities to speed up builds and asset handling." },
            { type: "paragraph", text: "I also integrated Google Maps to improve location discovery and used Google Search Console to set up basic analytics — then taught my client how to read those reports so she can track visits and performance. For deployment and file management we used SFTP to administer assets on the hosting server." },
            { type: "button", text: "Visit Website", url: "https://www.aesthetic-leonti.de" },
            { type: "video", video: "leonti-project.mp4", poster: "leonti-assets/leonti-img-1.webp" },
            { type: "paragraph", text: "Working hand-in-hand with a designer in Figma was rewarding: we iterated on layouts and translated the mockups into reusable components. The collaboration sharpened my design sensibilities and improved Figma-to-React handoffs." },
            {
                type: "image", src: [
                    `${import.meta.env.BASE_URL}/assets/imgs/leonti-assets/leonti-img-16.webp`,
                    `${import.meta.env.BASE_URL}/assets/imgs/leonti-assets/leonti-img-17.webp`,
                    `${import.meta.env.BASE_URL}/assets/imgs/leonti-assets/leonti-img-18.webp`
                ]
            },
            { type: "paragraph", text: "The project taught me a lot about image optimization, automation, and splitting UI into clean components. My client was happy with the result, and I left the project more curious and ready to keep improving performance and UX." }
        ]
    }
];

export default projectsData;