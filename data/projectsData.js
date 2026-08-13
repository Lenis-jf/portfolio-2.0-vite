const projectsData = [
    {
        id: "dronesim",
        title: "Drones Simulation",
        sectionClass: "light-section",
        content: [
            {
                type: "image", src: [
                    `${import.meta.env.BASE_URL}assets/imgs/dronesim-assets/dronesim-img-1.png`,
                    `${import.meta.env.BASE_URL}assets/imgs/dronesim-assets/dronesim-img-2.png`,
                    `${import.meta.env.BASE_URL}assets/imgs/dronesim-assets/dronesim-img-3.png`
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
                    `${import.meta.env.BASE_URL}assets/imgs/cultural-fitness-assets/cultural-fitness-img-1.webp`,
                    `${import.meta.env.BASE_URL}assets/imgs/cultural-fitness-assets/cultural-fitness-img-2.webp`,
                    `${import.meta.env.BASE_URL}assets/imgs/cultural-fitness-assets/cultural-fitness-img-3.webp`,
                    `${import.meta.env.BASE_URL}assets/imgs/cultural-fitness-assets/cultural-fitness-img-4.webp`,
                    `${import.meta.env.BASE_URL}assets/imgs/cultural-fitness-assets/cultural-fitness-img-5.webp`,
                    `${import.meta.env.BASE_URL}assets/imgs/cultural-fitness-assets/cultural-fitness-img-6.webp`,
                    `${import.meta.env.BASE_URL}assets/imgs/cultural-fitness-assets/cultural-fitness-img-7.webp`,
                ]
            },
            {
                type: "paragraph", text: "Where fitness meets code! 💪 Collaborated with design students to create this gym-inspired site. Our mission? To create a beautiful landing page with different function like a BMI calculator or even a dark mode button!"
            },
            {
                type: "button", text: "Show Repository", url: "https://github.com/Lenis-jf/Cultural-Fitness"
            },
            {
                type: "paragraph", text: "Learned to work with designers’ mockups (turns out \"pixel perfect\" is harder than it sounds!). It is pretty easy to navigate through the different sections and im still proud of the design and amount of usefull information the website has"
            },
            {
                type: "video", video: "cultural-fitness-project.mp4", poster: "cultural-fitness-assets/cultural-fitness-project.webp"
            },
            {
                type: "button", text: "Visit Website", url: "https://lenis-jf.github.io/Cultural-Fitness/"
            },
            {
                type: "paragraph", text: "Though the business plan fizzled, the code survived! Check out our Figma-to-CSS journey below—it’s like watching a baby bird learn to fly!"
            },
            {
                type: "image", src: [
                    `${import.meta.env.BASE_URL}assets/imgs/cultural-fitness-assets/cf-figma-img-1.webp`,
                    `${import.meta.env.BASE_URL}assets/imgs/cultural-fitness-assets/cf-figma-img-2.webp`,
                ]
            },
            {
                type: "paragraph", text: "Biggest takeaway? Teamwork makes the code work! (And always version control your designs)"
            }
        ]
    },
    {
        id: "leonti",
        title: "Leonti Aesthetic — Cosmetic Studio",
        sectionClass: "light-section",
        content: [
            {
                type: "image", src: [
                    `${import.meta.env.BASE_URL}assets/imgs/leonti-assets/leonti-img-1.webp`,
                    `${import.meta.env.BASE_URL}assets/imgs/leonti-assets/leonti-img-2.webp`,
                    `${import.meta.env.BASE_URL}assets/imgs/leonti-assets/leonti-img-4.webp`,
                    `${import.meta.env.BASE_URL}assets/imgs/leonti-assets/leonti-img-5.webp`,
                    `${import.meta.env.BASE_URL}assets/imgs/leonti-assets/leonti-img-6.webp`,
                    `${import.meta.env.BASE_URL}assets/imgs/leonti-assets/leonti-img-9.webp`,
                    `${import.meta.env.BASE_URL}assets/imgs/leonti-assets/leonti-img-10.webp`,
                    `${import.meta.env.BASE_URL}assets/imgs/leonti-assets/leonti-img-11.webp`,
                    `${import.meta.env.BASE_URL}assets/imgs/leonti-assets/leonti-img-12.webp`,
                    `${import.meta.env.BASE_URL}assets/imgs/leonti-assets/leonti-img-13.webp`,
                    `${import.meta.env.BASE_URL}assets/imgs/leonti-assets/leonti-img-15.webp`
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
                    `${import.meta.env.BASE_URL}assets/imgs/leonti-assets/leonti-img-16.webp`,
                    `${import.meta.env.BASE_URL}assets/imgs/leonti-assets/leonti-img-17.webp`,
                    `${import.meta.env.BASE_URL}assets/imgs/leonti-assets/leonti-img-18.webp`
                ]
            },
            { type: "paragraph", text: "The project taught me a lot about image optimization, automation, and splitting UI into clean components. My client was happy with the result, and I left the project more curious and ready to keep improving performance and UX." }
        ]
    },
    {
        id: "scraper",
        title: "Real Estate Scraper — Automation Tool",
        sectionClass: "light-section",
        content: [
            {
                type: "image", src: [
                    `${import.meta.env.BASE_URL}assets/imgs/scraper-assets/scraper-img-1.webp`,
                    `${import.meta.env.BASE_URL}assets/imgs/scraper-assets/scraper-img-2.webp`,
                    `${import.meta.env.BASE_URL}assets/imgs/scraper-assets/scraper-img-3.webp`,
                    `${import.meta.env.BASE_URL}assets/imgs/scraper-assets/scraper-img-4.webp`,
                    `${import.meta.env.BASE_URL}assets/imgs/scraper-assets/scraper-img-9.webp`,
                    `${import.meta.env.BASE_URL}assets/imgs/scraper-assets/scraper-img-5.webp`
                ]
            },
            {
                type: "paragraph",
                text: "My first serious dive into large-scale automation! ⚙️ Developed with Python, Selenium, and Flet, this project collects property listings from a global aggregator site in Germany. It distinguishes multi-family houses from single apartments and exports all structured data into CSV and Excel formats."
            },
            {
                type: "paragraph",
                text: "The goal was to replace a tedious manual workflow that used to take over a week. By managing multiple browser sessions simultaneously (up to five at a time), the scraper can process hundreds of listings in just minutes, generating structured, ready-to-analyze datasets."
            },
            {
                type: "paragraph",
                text: "I learned how to analyze and dissect website structures deeply — from dynamic content to authentication and rate limits. Writing clean automation logic that respects page limits and connection reliability was both challenging and rewarding."
            },
            {
                type: "video",
                video: "scraper-project.mp4",
                poster: "scraper-assets/scraper-img-2.webp"
            },
            {
                type: "paragraph",
                text: "Integrating Selenium with CSV pipelines was one of my favorite parts! It felt incredibly satisfying to watch live data flow from the browser straight into a formatted Excel file that performs automatic viability calculations for each property."
            },
            {
                type: "paragraph",
                text: "Because of confidentiality agreements and sensitive data involved, this project’s code remains semi-private. However, I’m happy to showcase the technical aspects and architecture upon request — just reach out!"
            },
            {
                type: "paragraph",
                text: "This project made me appreciate the true power of automation — and how a few lines of code can save days of repetitive human work. It also sparked my curiosity for improving data processing speed, error handling, and UI integration with Flet."
            },
            {
                type: "image", src: [
                    `${import.meta.env.BASE_URL}assets/imgs/scraper-assets/scraper-img-6.webp`,
                    `${import.meta.env.BASE_URL}assets/imgs/scraper-assets/scraper-img-7.webp`,
                    `${import.meta.env.BASE_URL}assets/imgs/scraper-assets/scraper-img-8.webp`,
                ]
            },
            {
                type: "paragraph",
                text: "Biggest takeaway? Automation is not just about speed — it’s about precision, scalability, and giving people more time to focus on what really matters."
            },
            {
                type: "paragraph",
                text: "Though not publicly hosted, this app was one of my proudest experiments in practical data engineering and process optimization."
            }
        ]
    },
    {
        id: "roomman",
        title: "Roomman — Distributed Room Management System",
        sectionClass: "light-section",
        content: [
            {
                type: "image",
                src: [
                    `${import.meta.env.BASE_URL}assets/imgs/roomman-assets/roomman-img-1.webp`,
                    `${import.meta.env.BASE_URL}assets/imgs/roomman-assets/roomman-img-2.webp`,
                    `${import.meta.env.BASE_URL}assets/imgs/roomman-assets/roomman-img-3.webp`,
                    `${import.meta.env.BASE_URL}assets/imgs/roomman-assets/roomman-img-4.webp`,
                ]
            },
            {
                type: "paragraph",
                text: "Roomman was developed as part of the Distributed Systems course at my university. The goal was to design a fully functional client-server application that manages university classrooms and auditoriums through a distributed architecture, using sockets and Remote Procedure Calls (RPC)."
            },
            {
                type: "paragraph",
                text: "The project was entirely console-based and implemented communication between a client and a server that shared a synchronized database. Clients could create, modify, delete, or query rooms in real-time, while the server maintained data integrity and handled concurrent requests efficiently."
            },
            { type: "button", text: "Show Repository", url: "https://github.com/Lenis-jf/Distributed-Systems-SS25" },
            {
                type: "paragraph",
                text: "Throughout the semester, the system evolved through five incremental workshops, each increasing in complexity. Some focused on manual socket implementation, others introduced SunRPC integration, and later versions involved working with APIs and predefined libraries such as RoomManager for database operations."
            },
            {
                type: "paragraph",
                text: "One of the most valuable aspects of this project was understanding how distributed systems communicate — from encoding and decoding payloads to handling synchronization, concurrency, and message reliability. These principles connected strongly with concepts from my previous course in Computer Networks."
            },
            {
                type: "paragraph",
                text: "Each workshop was submitted through GitLab, where the professor provided detailed feedback and points for implementation quality, architecture, and performance. I consistently achieved top scores and was recognized as the best performer in the class for this project series."
            },
            {
                type: "video",
                video: "roomman-project.mp4",
                poster: "roomman-assets/roomman-img-1.webp"
            },
            {
                type: "paragraph",
                text: "Roomman not only strengthened my understanding of network protocols, sockets, and RPC but also showed me how distributed software can scale when designed with clean modular communication and proper fault handling."
            },
            {
                type: "paragraph",
                text: "Looking back, this project helped bridge theory and practice in a tangible way — transforming abstract distributed system principles into a working, testable product that improved every two weeks through disciplined iteration."
            },
            {
                type: "paragraph",
                text: "This experience gave me a much deeper appreciation for the architecture behind large-scale systems — how they manage communication, persistence, and client coordination without compromising speed or reliability."
            }
        ]
    },
    {
        id: "oceano-rosa",
        title: "Oceano Rosa — My First Web Design Journey",
        sectionClass: "light-section",
        content: [
            {
                type: "image",
                src: [
                    `${import.meta.env.BASE_URL}assets/imgs/oceano-rosa-assets/oceano-rosa-img-1.webp`,
                    `${import.meta.env.BASE_URL}assets/imgs/oceano-rosa-assets/oceano-rosa-img-2.webp`,
                    `${import.meta.env.BASE_URL}assets/imgs/oceano-rosa-assets/oceano-rosa-img-3.webp`
                ]
            },
            {
                type: "paragraph",
                text: "Oceano Rosa was a personal project and small business I started about six years ago with a close partner. We designed and sold fantasy gold jewelry, and I wanted to create a website that represented our brand from scratch — entirely by myself."
            },
            {
                type: "paragraph",
                text: "It was one of my first full websites, handcrafted using only HTML, CSS, and pure JavaScript. No frameworks, no templates — just raw code and a lot of curiosity to understand how every element of the web fits together."
            },
            {
                type: "image",
                src: [
                    `${import.meta.env.BASE_URL}assets/imgs/oceano-rosa-assets/oceano-rosa-img-4.webp`,
                    `${import.meta.env.BASE_URL}assets/imgs/oceano-rosa-assets/oceano-rosa-img-5.webp`
                ]
            },
            { type: "button", text: "Show Repository", url: "https://github.com/Lenis-jf/Oceano-Rosa.github.io" },
            {
                type: "paragraph",
                text: "The design shows my early stage as a developer, but also my drive to experiment, test ideas, and learn from every mistake. It’s a time capsule of my curiosity — and how my web development journey truly began."
            },
            {
                type: "paragraph",
                text: "Creating Oceano Rosa taught me the importance of both aesthetics and usability. I learned to structure layouts, style components, and implement interactivity manually, gaining a deep appreciation for how front-end technologies work under the hood."
            },
            {
                type: "paragraph",
                text: "Even though I’ve moved on to using modern frameworks like React and SCSS, this project remains one of my favorites because it reminds me where I started and how far I’ve come since then."
            },
            {
                type: "video",
                video: "oceano-rosa-project.mp4",
                poster: "oceano-rosa-assets/oceano-rosa-img-1.webp"
            },
            { type: "button", text: "Visit Website", url: "https://lenis-jf.github.io/Oceano-Rosa.github.io/" },
            {
                type: "paragraph",
                text: "Looking back, Oceano Rosa represents more than just a jewelry brand — it was the first time I combined creativity, design, and code into something real, functional, and meaningful to me."
            },
            {
                type: "paragraph",
                text: "It may not be perfect, but it’s honest — a small, glittering piece of my early developer story that still shines bright."
            }
        ]
    },
    {
        id: "batatabit",
        title: "BatataBit — Responsive Crypto Broker Landing Page",
        sectionClass: "light-section",
        content: [
            {
                type: "image",
                src: [
                    `${import.meta.env.BASE_URL}assets/imgs/batatabit-assets/batatabit-img-1.webp`,
                    `${import.meta.env.BASE_URL}assets/imgs/batatabit-assets/batatabit-img-2.webp`,
                    `${import.meta.env.BASE_URL}assets/imgs/batatabit-assets/batatabit-img-3.webp`
                ]
            },
            {
                type: "paragraph",
                text: "BatataBit was created during a web-development course on Platzi about four years ago. The goal: build a mobile-first, responsive landing page for a fictional cryptocurrency broker, applying the fundamentals of HTML, CSS and JavaScript in real time."
            },
            {
                type: "paragraph",
                text: "This project became my first real exercise in thinking ‘mobile-first’. Designing layouts starting from the smallest screen forced me to prioritise content, performance and usability — not just aesthetics. It was a game-changer for how I approach UI."
            },
            { type: "button", text: "Show Repository", url: "https://github.com/Lenis-jf/batatabit" },
            {
                type: "image",
                src: [
                    `${import.meta.env.BASE_URL}assets/imgs/batatabit-assets/batatabit-img-4.webp`,
                    `${import.meta.env.BASE_URL}assets/imgs/batatabit-assets/batatabit-img-5.webp`
                ]
            },
            { type: "button", text: "Visit Website", url: "https://lenis-jf.github.io/batatabit/" },
            {
                type: "paragraph",
                text: "I learned how responsive breakpoints, fluid grids and flexible images work in practise. Also, how supporting mobile devices early improves accessibility, discoverability and user experience — something that search engines and modern UX expect."
            },
            {
                type: "video",
                video: "batatabit-project.mp4",
                poster: "batatabit-assets/batatabit-img-1.webp"
            },
            {
                type: "paragraph",
                text: "Though it was one of my early projects, BatataBit holds a special place because it laid the foundation for everything I build now. It taught me that responsive web design isn’t optional — it’s fundamental."
            },
            {
                type: "paragraph",
                text: "I still use those lessons today when architecting components, styling scalable layouts, and ensuring every site works beautifully on any device. This landing page reminds me where I started — and how far I’ve come."
            }
        ]
    },
    {
        id: "tyc",
        title: "SCSS Revival — Web Design Practice",
        sectionClass: "light-section",
        content: [
            {
                type: "image",
                src: [
                    `${import.meta.env.BASE_URL}assets/imgs/tyc-assets/tyc-img-1.webp`,
                    `${import.meta.env.BASE_URL}assets/imgs/tyc-assets/tyc-img-2.webp`,
                    `${import.meta.env.BASE_URL}assets/imgs/tyc-assets/tyc-img-3.webp`,
                    `${import.meta.env.BASE_URL}assets/imgs/tyc-assets/tyc-img-4.webp`
                ]
            },
            {
                type: "paragraph",
                text: "This project marked my return to front-end development after quite some time away from web design. I wanted to get my hands back on code and revisit everything I love about the visual, iterative process of creating web interfaces."
            },
            {
                type: "paragraph",
                text: "I built it entirely with pure HTML and SCSS — no frameworks, no preprocessors beyond the basics. My goal was to focus on the structure and design system itself, exploring modern layout techniques, color balance, and responsive typography."
            },
            {
                type: "paragraph",
                text: "The project’s concept originally came from a larger app idea developed with two friends back in Colombia. Due to confidentiality agreements, the app’s content and purpose remain private, but the front-end experiment lives on as my own practice piece."
            },
            {
                type: "video",
                video: "tyc-project.mp4",
                poster: "tyc-assets/tyc-img-1.webp"
            },
            {
                type: "paragraph",
                text: "Rebuilding from scratch helped me regain fluency in SCSS syntax and rediscover the importance of modular design — splitting styles logically across partials, nesting selectively, and leveraging mixins for consistent responsiveness."
            },
            {
                type: "paragraph",
                text: "What I loved most was the instant visual feedback: each tweak, each variable change immediately shaped the interface. That sense of control and creativity reminded me why web development feels so rewarding."
            },
            {
                type: "paragraph",
                text: "Although this project isn’t publicly hosted, it stands as a personal milestone — a small, stylish reboot that reconnected me with one of my favorite parts of programming: the blend of logic, structure, and aesthetic expression."
            }
        ]
    },
    {
        id: "voice-maze",
        title: "Voice Maze — Multimodal HMI Project",
        sectionClass: "light-section",
        content: [
            {
                type: "image",
                src: [
                    `${import.meta.env.BASE_URL}assets/imgs/voice-maze-assets/voice-maze-img-1.webp`,
                    `${import.meta.env.BASE_URL}assets/imgs/voice-maze-assets/voice-maze-img-2.webp`,
                    `${import.meta.env.BASE_URL}assets/imgs/voice-maze-assets/voice-maze-img-3.webp`
                ]
            },
            {
                type: "paragraph",
                text: "Voice Maze is an interactive web application I developed for my Human–Machine Interaction (HMI) course. It explores multimodal control systems — combining voice, keyboard, and touch inputs to create a dynamic, accessible gameplay experience across desktop and mobile devices."
            },
            {
                type: "paragraph",
                text: "The project was built entirely with React, leveraging the Web Speech API for voice recognition. Players can choose to control the maze by speaking commands, pressing keys, or using on-screen floating buttons on mobile. The system provides instant visual and textual feedback for every user action."
            },
            { type: "button", text: "Show Repository", url: "https://github.com/Lenis-jf/voice-controlled-maze" },
            {
                type: "paragraph",
                text: "The voice commands are parsed and interpreted using regular expressions, allowing the app to understand complex instructions such as 'five times right' or sequences like 'up, down, right'. These commands are converted into an ordered list of moves that the player executes sequentially."
            },
            {
                type: "video",
                video: "voice-maze-project.mp4",
                poster: "voice-maze-assets/voice-maze-img-2.webp"
            },
            {
                type: "paragraph",
                text: "For performance, the maze is drawn on a Canvas element using an off-screen rendering technique. Only the player’s movement is redrawn in real time, while the maze layout remains static. The structure is dynamically recalculated when the window is resized, maintaining full responsiveness."
            },
            { type: "button", text: "Visit Website", url: "https://lenis-jf.github.io/voice-controlled-maze/" },
            {
                type: "paragraph",
                text: "The maze generation itself is implemented with a custom Backtracking algorithm, while pathfinding — specifically the detection of the farthest exit cell — is achieved through a Breadth-First Search (BFS) algorithm. Both algorithms were implemented from scratch."
            },
            {
                type: "image",
                src: [
                    `${import.meta.env.BASE_URL}assets/imgs/voice-maze-assets/voice-maze-img-4.webp`,
                    `${import.meta.env.BASE_URL}assets/imgs/voice-maze-assets/voice-maze-img-5.webp`,
                    `${import.meta.env.BASE_URL}assets/imgs/voice-maze-assets/voice-maze-img-6.webp`,
                    `${import.meta.env.BASE_URL}assets/imgs/voice-maze-assets/voice-maze-img-7.webp`,
                ]
            },
            {
                type: "paragraph",
                text: "To enhance accessibility, the project includes a language switcher that not only translates all on-screen text but also updates the language of the speech recognition engine. Currently, English, Spanish, and German are supported, each adapting the recognition patterns accordingly."
            },
            {
                type: "paragraph",
                text: "The interface provides continuous feedback through pop-ups and UI animations — notifying players when the system is listening, showing recognized commands, and celebrating victories or defeats. The maze runs against a timer, displaying remaining time and end results."
            },
            {
                type: "paragraph",
                text: "Future updates will include difficulty levels and adjustable maze sizes. For now, Voice Maze stands as a robust demonstration of multimodal interaction, where human input and machine interpretation merge to create a responsive and immersive HMI experience."
            }
        ]
    },
    {
        id: "edgeml-football",
        title: "EdgeML Meets American Football — AI Tactical Analyzer",
        sectionClass: "light-section",
        content: [
            {
                type: "image", src: [
                    `${import.meta.env.BASE_URL}assets/imgs/edgeml-football-assets/edgeml-img-1.webp`,
                    `${import.meta.env.BASE_URL}assets/imgs/edgeml-football-assets/edgeml-img-2.webp`,
                    `${import.meta.env.BASE_URL}assets/imgs/edgeml-football-assets/edgeml-img-3.webp`,
                    `${import.meta.env.BASE_URL}assets/imgs/edgeml-football-assets/edgeml-img-4.webp`,
                    `${import.meta.env.BASE_URL}assets/imgs/edgeml-football-assets/edgeml-img-5.webp`
                ]
            },
            {
                type: "paragraph", text: "This has been my most ambitious university project so far. Alongside two teammates, we built a tactical American football analysis pipeline designed to run in real time on edge devices with limited hardware, such as the 8GB Nvidia Jetson Orin Nano."
            },
            { type: "button", text: "Show Repository", url: "https://github.com/Lenis-jf/EdgeML-American-Football" },
            {
                type: "paragraph", text: "During development, I took on the role of Scrum Master and shouldered much of the technical responsibility by defining the architecture and design patterns. I was always available to the team whenever they hit a technical wall in their sprint backlog tasks. Ultimately, I took charge of essential parts due to collaboration difficulties with a portion of the original team. I developed the pipeline for recognizing offensive formations, the asynchronous jersey number reading, a video flow that fully utilized the edge hardware, and, together with my two teammates, we trained a YOLO model for player detection and a YOLO Pose model to detect field keypoints for homography transformations later on."
            },
            {
                type: "paragraph", text: "One of the biggest challenges was finding a practical solution to integrate EasyOCR while dealing with poor clip quality and constant ID Switching. To solve this, I implemented dynamic cropping specifically aimed at noise reduction on the players' torsos. Furthermore, to maximize efficiency, I trained an image classification model capable of categorizing crops as readable or unreadable before passing them to the OCR, saving a massive amount of computational cost. This entire integration was done asynchronously to avoid blocking the main thread and was hugely boosted by caching strategies using thread-safe dictionaries. These strategies not only tackled the ID Switching problem and prevented reprocessing players we had already analyzed, but they also enabled exclusive re-analysis of jersey numbers with under 50 percent confidence without risking the pipeline flow."
            },
            {
                type: "video", video: "edgeml-project-1.mp4", poster: "edgeml-football-assets/edgeml-img-1.webp"
            },
            {
                type: "paragraph", text: "Formation recognition was another huge milestone. Initial models on presnap images failed due to occlusion and perspective. After creating a homography engine to map pixels to a 2D field with a bird's-eye view, I changed the logic to XGBoost. I used the Center player as a spatial anchor for the rest and injected synthetic NaN values during training to simulate missing players. This allowed us to successfully handle situations where not all 11 players are detected, boosting the model's accuracy impressively."
            },
            {
                type: "image", src: [
                    `${import.meta.env.BASE_URL}assets/imgs/edgeml-football-assets/edgeml-img-6.webp`,
                    `${import.meta.env.BASE_URL}assets/imgs/edgeml-football-assets/edgeml-img-7.webp`,
                    `${import.meta.env.BASE_URL}assets/imgs/edgeml-football-assets/edgeml-img-8.webp`,
                    `${import.meta.env.BASE_URL}assets/imgs/edgeml-football-assets/edgeml-img-9.webp`
                ]
            },
            {
                type: "paragraph", text: "Finally, very close to the deadline, I decided to push the Jetson Orin's hardware to the max to deliver true value to the coaches. Since they lack IT knowledge, I designed a Web Hub hosted directly on the device. The Jetson creates its own hotspot so they can connect from their phones and access the web app, keeping the entire service completely independent of the internet, the cloud, and external services. I set up the server with Uvicorn and FastAPI and developed the frontend in React JS for better state management and real time telemetry."
            },
            {
                type: "video", video: "edgeml-project-2.mp4", poster: "edgeml-football-assets/edgeml-img-6.webp"
            },
            { type: "button", text: "Download Documentation", url: `${import.meta.env.BASE_URL}assets/docs/EdgeML-meets-American-Football-Gruppe1-compressed.pdf` },
            {
                type: "paragraph", text: "This project immersed me deeply in software architecture and agile product development. It pushed me out of my comfort zone and forced me to think beyond for the sake of the final product. Seeing what can be achieved through teamwork and frontier technologies like Machine Learning and Computer Vision sparked a new passion in me for developing technological solutions in unexpected sectors."
            }
        ]
    }
];

export default projectsData;