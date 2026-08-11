import projectsData from "../../data/projectsData";

const projectTranslations = {
  es: {
    dronesim: {
      title: "Simulacion de Drones",
      content: [
        null,
        "Mi primer proyecto grande en Java. Lo hice para una clase de POO y me enseño muchisimo sobre APIs, trabajo en equipo y visualizacion de datos en tiempo real.",
        "Ver repositorio",
        "El reto fue que solo funcionaba en el wifi del campus. Aun asi, el proyecto me hizo disfrutar mucho resolver problemas y conectar una API como si fuera un pequeño rompecabezas.",
        null,
        "Mirando hacia atras, es un proyecto muy de principiante, pero justo por eso me gusta tanto. Mi momento favorito fue cuando por fin funciono la paginacion."
      ]
    },
    "cultural-fitness": {
      title: "Cultural Fitness",
      content: [
        null,
        "Fitness y codigo en un mismo lugar. Trabaje con estudiantes de diseno para crear este sitio inspirado en un gimnasio, con una landing bonita y funciones como calculadora de IMC y modo oscuro.",
        "Ver repositorio",
        "Aprendi a trabajar con mockups de diseno y a respetar mejor la intencion visual del equipo. El sitio es facil de navegar y sigue siendo uno de mis proyectos favoritos por su estetica y utilidad.",
        null,
        "Visitar sitio",
        "Aunque el plan de negocio no siguio adelante, el codigo si sobrevivio. Esta parte del proyecto muestra nuestro recorrido de Figma a CSS, y sigue siendo una de mis experiencias mas divertidas.",
        null,
        "La mayor leccion fue que el trabajo en equipo hace que el codigo funcione mucho mejor."
      ]
    },
    leonti: {
      title: "Leonti Aesthetic — Estudio de Cosmetica",
      content: [
        null,
        "Una landing page compacta y enfocada en conversiones que construi para una cosmetologa profesional que necesitaba presencia online para mostrar servicios, precios y una galeria real de su trabajo.",
        "Ver repositorio",
        "La web destaca servicios como faciales, pestanas, cejas y paquetes, ademas de precios claros y una colaboracion con CNC Shop, cuyos productos recomienda el estudio.",
        "A nivel tecnico la mantuve rapida y facil de mantener: secciones en React, imagenes optimizadas y pequenas automatizaciones para agilizar despliegues y manejo de assets.",
        "Tambien integre Google Maps y Search Console para mejorar el alcance y ayudar a la clienta a entender visitas y rendimiento.",
        "Visitar sitio",
        null,
        "Trabajar mano a mano con una disenadora en Figma fue muy valioso: iteramos los layouts y convertimos los mockups en componentes reutilizables.",
        null,
        "Este proyecto me enseno mucho sobre optimizacion de imagenes, automatizacion y organizacion limpia de la interfaz. La clienta quedo feliz y yo sali con mas curiosidad por seguir mejorando UX y rendimiento."
      ]
    },
    scraper: {
      title: "Scraper Inmobiliario — Herramienta de Automatizacion",
      content: [
        null,
        "Mi primera inmersion seria en automatizacion a gran escala. Con Python, Selenium y Flet hice esta herramienta para recolectar anuncios inmobiliarios de un agregador en Alemania.",
        "El objetivo era reemplazar un flujo manual que tomaba mas de una semana. Al manejar varias sesiones del navegador al mismo tiempo, el scraper procesa cientos de anuncios en minutos y genera datos listos para analizar.",
        "Aprendi a leer estructuras web con mucho detalle, desde contenido dinamico hasta autenticacion y limites de peticiones. Escribir una automatizacion limpia y confiable fue dificil, pero muy gratificante.",
        null,
        "Integrar Selenium con CSV y Excel fue una de las partes que mas disfrute. Ver los datos pasar del navegador a una hoja calculada automaticamente fue muy satisfactorio.",
        "Por acuerdos de confidencialidad, el codigo sigue siendo semi privado. Aun asi, puedo mostrar la arquitectura y los aspectos tecnicos si me lo piden.",
        "Este proyecto me hizo valorar el poder real de la automatizacion: unas pocas lineas de codigo pueden ahorrar dias de trabajo repetitivo.",
        null,
        "La mayor leccion fue que automatizar no solo es ir mas rapido: tambien es ganar precision y escalabilidad.",
        "Aunque no esta publicado de forma abierta, sigue siendo uno de mis experimentos mas valiosos en ingenieria de datos y optimizacion de procesos."
      ]
    },
    roomman: {
      title: "Roomman — Sistema Distribuido para Aulas",
      content: [
        null,
        "Roomman lo desarrolle en una materia de Sistemas Distribuidos. El objetivo era crear una aplicacion cliente-servidor capaz de gestionar aulas y auditorios universitarios usando sockets y RPC.",
        "La aplicacion era completamente por consola y funcionaba con una base de datos sincronizada. El cliente podia crear, modificar, borrar o consultar aulas en tiempo real mientras el servidor mantenia la integridad de los datos.",
        "Ver repositorio",
        "Durante el semestre el sistema evoluciono en cinco talleres progresivos, cada uno mas complejo que el anterior. Algunas versiones se centraron en sockets manuales y otras en integracion SunRPC o uso de librerias predefinidas.",
        "Una de las partes mas interesantes fue entender como se comunican los sistemas distribuidos: codificacion de mensajes, sincronizacion, concurrencia y confiabilidad.",
        "Cada taller se entregaba por GitLab y recibia feedback detallado. Conseguimos las mejores notas de la clase en esa serie de entregas.",
        null,
        "Roomman no solo fortalecio mis bases en redes, sockets y RPC, tambien me mostro como un sistema distribuido puede escalar si la comunicacion modular y el manejo de fallos estan bien pensados.",
        "Mirandolo en perspectiva, fue un puente muy claro entre teoria y practica.",
        "Me dio una apreciacion mucho mas profunda por la arquitectura de sistemas grandes: como coordinan comunicacion, persistencia y clientes sin sacrificar velocidad."
      ]
    },
    "oceano-rosa": {
      title: "Oceano Rosa — Mi Primer Viaje en Diseno Web",
      content: [
        null,
        "Oceano Rosa fue un proyecto personal y un pequeno negocio que empece hace anos con una persona cercana. Disenabamos y vendiamos joyeria dorada de fantasia, y yo queria crear la web de la marca desde cero.",
        "Fue una de mis primeras paginas completas, hecha a mano con HTML, CSS y JavaScript puro. Sin frameworks ni plantillas, solo codigo y mucha curiosidad.",
        null,
        "Ver repositorio",
        "El diseno muestra mi etapa inicial como desarrollador, pero tambien mis ganas de experimentar y aprender de cada error.",
        "Crear Oceano Rosa me enseño la importancia de la estetica y la usabilidad. Aprendi a estructurar layouts, estilizar componentes e implementar interacciones manualmente.",
        "Aunque hoy use React y SCSS, este proyecto sigue siendo de mis favoritos porque me recuerda de donde sali y todo lo que creci desde entonces.",
        null,
        "Visitar sitio",
        "Mirandolo ahora, Oceano Rosa representa mucho mas que una marca de joyeria: fue la primera vez que combine creatividad, diseno y codigo en algo real y mio.",
        "No sera perfecto, pero es honesto: una pequena pieza brillante de mi historia como desarrollador."
      ]
    },
    batatabit: {
      title: "BatataBit — Landing Page Responsive para un Broker Cripto",
      content: [
        null,
        "BatataBit nacio en un curso de desarrollo web de Platzi hace unos anos. El objetivo era construir una landing page responsive y mobile first para un broker ficticio de criptomonedas.",
        "Fue mi primer ejercicio real pensando primero en mobile. Empezar por la pantalla mas pequena me obligo a priorizar contenido, rendimiento y usabilidad.",
        "Ver repositorio",
        null,
        "Visitar sitio",
        "Aprendi como funcionan los breakpoints, las grillas fluidas y las imagenes flexibles. Tambien entendi que apoyar bien a los dispositivos moviles mejora accesibilidad y experiencia.",
        null,
        "Aunque fue un proyecto temprano, BatataBit ocupa un lugar especial porque sento las bases de como pienso hoy el frontend.",
        "Aun uso esas lecciones al armar componentes, escalar layouts y asegurar que todo se vea bien en cualquier dispositivo."
      ]
    },
    tyc: {
      title: "SCSS Revival — Practica de Diseno Web",
      content: [
        null,
        "Este proyecto marco mi regreso al frontend despues de un tiempo lejos del diseno web. Queria volver a tocar codigo y recuperar el proceso visual e iterativo que tanto disfruto.",
        "Lo construi solo con HTML y SCSS, sin frameworks. Mi objetivo era concentrarme en la estructura, el sistema de diseno y la tipografia responsive.",
        "La idea original surgio de una app mas grande hecha con dos amigos en Colombia. Por acuerdos de confidencialidad, el contenido sigue siendo privado, pero el experimento de frontend quedo como practica personal.",
        null,
        "Rehacerlo desde cero me ayudo a recuperar fluidez con SCSS y a redescubrir el valor del diseno modular.",
        "Lo que mas disfrute fue el feedback visual inmediato: cada cambio alteraba la interfaz al instante y me recordaba por que el desarrollo web resulta tan gratificante.",
        "Aunque no esta publicado, sigue siendo un hito personal y un reinicio elegante de una de mis partes favoritas de programar."
      ]
    },
    "voice-maze": {
      title: "Voice Maze — Proyecto HMI Multimodal",
      content: [
        null,
        "Voice Maze es una aplicacion web interactiva que desarrolle para mi materia de Interaccion Humano-Maquina. Explora control multimodal combinando voz, teclado y touch para crear una experiencia accesible y dinamica.",
        "La app esta hecha completamente con React y usa la Web Speech API para reconocimiento de voz. El jugador puede hablar, usar el teclado o tocar botones flotantes en mobile. La interfaz da feedback inmediato en texto y visualmente.",
        "Ver repositorio",
        "Los comandos de voz se interpretan con expresiones regulares, por lo que la app entiende instrucciones como 'cinco veces derecha' o secuencias como 'arriba, abajo, derecha'.",
        null,
        "Para rendimiento, el laberinto se dibuja en Canvas con renderizado fuera de pantalla. Solo se redibuja el movimiento del jugador y la estructura se recalcula al redimensionar la ventana.",
        "Visitar sitio",
        "El propio laberinto se genera con Backtracking y la salida mas lejana se detecta con BFS. Ambos algoritmos fueron implementados desde cero.",
        null,
        "Para mejorar accesibilidad, el proyecto incluye un selector de idioma que traduce la interfaz y cambia el idioma del reconocimiento de voz a ingles, espanol o aleman.",
        "La interfaz mantiene feedback continuo con popups y animaciones, avisando cuando escucha, mostrando comandos reconocidos y celebrando victorias o derrotas.",
        "En futuras versiones agregare niveles de dificultad y tamanos ajustables. Por ahora, Voice Maze es una demostracion solida de interaccion multimodal y experiencia inmersiva."
      ]
    },
    "edgeml-football": {
      title: "EdgeML Meets American Football — Analizador Tactico con IA",
      content: [
        null,
        "Mi proyecto universitario mas ambicioso hasta ahora. Construimos un sistema completo de IA en el borde para analizar jugadas de futbol americano en tiempo real, desplegado en un Nvidia Jetson Orin Nano.",
        "Ver repositorio",
        "Lleve la arquitectura principal y varios roles: Scrum Master, Lead Developer del pipeline de video, integracion OCR, reconocimiento de formaciones y el Web Hub. El mayor reto tecnico fue procesar video pesado sin saturar la CPU, asi que diseñe un pipeline asincrono productor-consumidor con threading para mantener la tasa de cuadros fluida.",
        "Para reconocer dorsales, el OCR en bruto no era suficiente. Diseñe un modelo de legibilidad con YOLO para filtrar recortes borrosos o inutiles antes de enviarlos a EasyOCR. Al moverlo a un hilo asincrono separado con una estrategia de cache, la precision subio mucho y se ahorro bastante computo.",
        null,
        "El reconocimiento de formaciones fue otro gran hito. Los modelos de clasificacion fallaban por oclusion y perspectiva, asi que despues de crear un motor de homografia para mapear los pixeles a un campo 2D, cambie la logica a XGBoost. Entrenando con valores NaN sinteticos para simular jugadores ausentes, el modelo alcanzo una precision impresionante.",
        null,
        "Para que la herramienta fuera realmente util en el campo, construi un Web Hub con FastAPI y React. El Jetson emite su propio hotspot local, permitiendo que los coaches se conecten desde sus telefonos y accedan a un panel en vivo con telemetria, video y playcards sin depender de internet.",
        null,
        "Este proyecto llevo al limite mis habilidades en arquitectura de software, vision por computador y machine learning. Desde estabilizar trayectorias con pooling temporal hasta asegurar una comunicacion fluida entre React y FastAPI, fue una demostracion de como orquestar sistemas complejos en hardware limitado."
      ]
    }
  },
  de: {
    dronesim: {
      title: "Drohnen-Simulation",
      content: [
        null,
        "Mein erstes größeres Java-Projekt. Ich habe es für einen OOP-Kurs gebaut und dabei sehr viel über APIs, Teamarbeit und Datenvisualisierung gelernt.",
        "Repository anzeigen",
        "Die Herausforderung war, dass es nur im Campus-WLAN funktionierte. Trotzdem hat mich das Projekt sehr für Problemlösen begeistert, weil sich eine API-Integration wie ein kleines Puzzle anfühlte.",
        null,
        "Rückblickend ist es ein sehr anfängerfreundliches Projekt, aber genau deshalb mag ich es. Der stolzeste Moment war, als die Paginierung endlich funktionierte."
      ]
    },
    "cultural-fitness": {
      title: "Cultural Fitness",
      content: [
        null,
        "Fitness und Code an einem Ort. Gemeinsam mit Design-Studierenden habe ich diese vom Gym inspirierte Seite gebaut, mit einer schönen Landingpage und Funktionen wie BMI-Rechner und Dark-Mode-Schalter.",
        "Repository anzeigen",
        "Ich habe gelernt, besser mit Design-Mockups zu arbeiten und die visuelle Absicht des Teams einzuhalten. Die Seite ist leicht zu navigieren und gehört wegen ihrer Ästhetik und Nützlichkeit zu meinen Favoriten.",
        null,
        "Website besuchen",
        "Auch wenn der Businessplan nicht weiterlief, blieb der Code erhalten. Dieser Teil des Projekts zeigt unseren Weg von Figma zu CSS und ist für mich immer noch ein sehr spaßiges Kapitel.",
        null,
        "Die größte Lektion war, dass Teamarbeit Code deutlich besser macht."
      ]
    },
    leonti: {
      title: "Leonti Aesthetic — Kosmetikstudio",
      content: [
        null,
        "Eine kompakte Landingpage mit klarer Conversion-Ausrichtung, die ich für eine Kosmetikerin gebaut habe, die eine professionelle Online-Präsenz für Services, Preise und echte Arbeitsbeispiele brauchte.",
        "Repository anzeigen",
        "Die Website hebt Behandlungen wie Gesichtsbehandlungen, Wimpern, Augenbrauen und Pakete hervor, dazu transparente Preise und eine Kooperation mit CNC Shop, dessen Produkte das Studio empfiehlt.",
        "Technisch habe ich sie schnell und wartbar gehalten: React-Sections, optimierte Bilder und kleine Automatisierungen für Deployments und Asset-Handling.",
        "Ich habe auch Google Maps und Search Console integriert, um Reichweite und Auswertung zu verbessern.",
        "Website besuchen",
        null,
        "Die enge Zusammenarbeit mit einer Designerin in Figma war sehr wertvoll: Wir iterierten die Layouts und machten aus den Mockups wiederverwendbare Komponenten.",
        null,
        "Dieses Projekt hat mir viel über Bildoptimierung, Automatisierung und saubere UI-Aufteilung beigebracht. Die Kundin war zufrieden und ich ging mit noch mehr Neugier weiter."
      ]
    },
    scraper: {
      title: "Immobilien-Scraper — Automatisierungstool",
      content: [
        null,
        "Mein erster ernsthafter Einstieg in große Automatisierung. Mit Python, Selenium und Flet habe ich dieses Tool gebaut, um Immobilienanzeigen von einem deutschen Aggregator zu sammeln.",
        "Das Ziel war, einen manuellen Workflow zu ersetzen, der mehr als eine Woche dauerte. Durch mehrere Browser-Sitzungen gleichzeitig verarbeitet der Scraper hunderte Anzeigen in Minuten und erzeugt analysierbare Daten.",
        "Ich lernte Webseitenstrukturen sehr tief zu lesen, von dynamischem Inhalt bis zu Authentifizierung und Rate Limits. Eine saubere und verlässliche Automatisierung zu schreiben war anspruchsvoll, aber sehr lohnend.",
        null,
        "Selenium mit CSV und Excel zu verbinden war einer meiner Lieblingsteile. Die Daten direkt aus dem Browser in eine automatisch berechnete Tabelle laufen zu sehen, war sehr befriedigend.",
        "Wegen Vertraulichkeit bleibt der Code halb privat. Die technische Architektur kann ich aber auf Anfrage gern zeigen.",
        "Das Projekt hat mir die eigentliche Kraft von Automatisierung gezeigt: Ein paar Zeilen Code können Tage repetitiver Arbeit sparen.",
        null,
        "Die größte Erkenntnis war, dass Automatisierung nicht nur schneller, sondern auch präziser und skalierbarer ist.",
        "Auch wenn es nicht öffentlich gehostet ist, bleibt es eines meiner stolzesten Experimente in Data Engineering und Prozessoptimierung."
      ]
    },
    roomman: {
      title: "Roomman — Verteiltes Raumverwaltungssystem",
      content: [
        null,
        "Roomman habe ich im Fach Verteilte Systeme entwickelt. Ziel war eine Client-Server-Anwendung zur Verwaltung von Universitätsräumen mit Sockets und RPC.",
        "Die Anwendung lief komplett in der Konsole und arbeitete mit einer synchronisierten Datenbank. Clients konnten Räume in Echtzeit anlegen, ändern, löschen oder abfragen, während der Server die Datenintegrität hielt.",
        "Repository anzeigen",
        "Im Verlauf des Semesters entwickelte sich das System in fünf aufeinander aufbauenden Workshops, jeweils mit höherer Komplexität. Manche Versionen konzentrierten sich auf manuelle Sockets, andere auf SunRPC oder vorgefertigte Bibliotheken.",
        "Eine der wichtigsten Erkenntnisse war zu verstehen, wie verteilte Systeme kommunizieren: Codierung von Nachrichten, Synchronisation, Nebenläufigkeit und Zuverlässigkeit.",
        "Jeder Workshop wurde über GitLab abgegeben und detailliert bewertet. In dieser Projektserie gehörte ich konstant zu den Besten der Klasse.",
        null,
        "Roomman hat nicht nur mein Verständnis für Netzwerke, Sockets und RPC gestärkt, sondern auch gezeigt, wie sauber verteilte Software skalieren kann.",
        "Rückblickend war es ein sehr greifbarer Übergang von Theorie zu Praxis.",
        "Ich habe dadurch ein viel tieferes Verständnis für die Architektur großer Systeme bekommen."
      ]
    },
    "oceano-rosa": {
      title: "Oceano Rosa — Meine erste Webdesign-Reise",
      content: [
        null,
        "Oceano Rosa war ein persönliches Projekt und kleines Unternehmen, das ich vor einigen Jahren mit einer engen Partnerin gestartet habe. Wir entwarfen und verkauften fantasievollen Goldschmuck, und ich wollte die Marke komplett selbst ins Web bringen.",
        "Es war eine meiner ersten vollständigen Websites, komplett von Hand mit HTML, CSS und reinem JavaScript gebaut. Keine Frameworks, keine Vorlagen — nur Code und viel Neugier.",
        null,
        "Repository anzeigen",
        "Das Design zeigt meine frühe Phase als Entwickler, aber auch meinen Drang zu experimentieren und aus jedem Fehler zu lernen.",
        "Oceano Rosa hat mir gezeigt, wie wichtig Ästhetik und Usability sind. Ich lernte Layouts zu strukturieren, Komponenten zu stylen und Interaktion manuell zu bauen.",
        "Auch wenn ich heute moderne Frameworks nutze, gehört dieses Projekt weiter zu meinen Favoriten, weil es mich an meinen Anfang erinnert.",
        null,
        "Website besuchen",
        "Rückblickend war Oceano Rosa mehr als nur eine Schmuckmarke: Es war das erste Mal, dass ich Kreativität, Design und Code zu etwas echtem, funktionalem und persönlichem verbunden habe.",
        "Es ist vielleicht nicht perfekt, aber ehrlich — ein kleiner, glitzernder Teil meiner Entwicklergeschichte."
      ]
    },
    batatabit: {
      title: "BatataBit — Responsive Landingpage für einen Krypto-Broker",
      content: [
        null,
        "BatataBit entstand vor einigen Jahren in einem Webentwicklungs-Kurs bei Platzi. Das Ziel war eine responsive, mobile-first Landingpage für einen fiktiven Kryptowährungs-Broker.",
        "Es war meine erste echte Übung im Mobile-First-Denken. Mit dem kleinsten Screen zu beginnen zwang mich, Inhalte, Performance und Usability zu priorisieren.",
        "Repository anzeigen",
        null,
        "Website besuchen",
        "Ich habe gelernt, wie Breakpoints, fluide Grids und flexible Bilder funktionieren. Und dass gute mobile Unterstützung Barrierefreiheit und UX verbessert.",
        null,
        "Auch wenn es ein frühes Projekt war, hat BatataBit einen besonderen Platz, weil es die Grundlage für meinen heutigen Umgang mit Frontend gelegt hat.",
        "Ich nutze diese Lektionen noch immer beim Aufbau von Komponenten und skalierbaren Layouts."
      ]
    },
    tyc: {
      title: "SCSS Revival — Webdesign-Praxis",
      content: [
        null,
        "Dieses Projekt markierte meine Rückkehr ins Frontend nach einer längeren Pause vom Webdesign. Ich wollte wieder Code schreiben und den visuellen, iterativen Prozess neu erleben.",
        "Ich habe es komplett mit HTML und SCSS gebaut, ohne Frameworks. Mein Fokus lag auf Struktur, Designsystem und responsiver Typografie.",
        "Die Idee kam ursprünglich aus einer größeren App mit zwei Freunden aus Kolumbien. Wegen Vertraulichkeit bleibt der Inhalt privat, aber das Frontend-Experiment lebt als Praxisprojekt weiter.",
        null,
        "Von Grund auf neu zu bauen half mir, SCSS wieder flüssig zu beherrschen und die Bedeutung von modularen Styles neu zu schätzen.",
        "Am meisten mochte ich das sofortige visuelle Feedback: Jede Änderung beeinflusste die Oberfläche direkt und erinnerte mich daran, warum Webentwicklung so erfüllend ist.",
        "Auch wenn es nicht öffentlich gehostet ist, bleibt es ein persönlicher Meilenstein und ein stilvoller Neustart."
      ]
    },
    "voice-maze": {
      title: "Voice Maze — Multimodales HMI-Projekt",
      content: [
        null,
        "Voice Maze ist eine interaktive Webanwendung, die ich für meinen HMI-Kurs entwickelt habe. Sie kombiniert Sprache, Tastatur und Touch zu einem dynamischen und barrierearmen Spielerlebnis.",
        "Die App ist komplett mit React gebaut und nutzt die Web Speech API für Spracherkennung. Der Spieler kann sprechen, die Tastatur nutzen oder mobile Floating Buttons verwenden. Die UI gibt sofort visuelles und textuelles Feedback.",
        "Repository anzeigen",
        "Sprachkommandos werden mit regulären Ausdrücken geparst, sodass die App komplexe Anweisungen wie 'fünf mal rechts' oder Sequenzen wie 'oben, unten, rechts' versteht.",
        null,
        "Für Performance wird das Labyrinth auf einem Canvas per Off-Screen-Rendering gezeichnet. Nur die Bewegung des Spielers wird in Echtzeit neu gerendert.",
        "Website besuchen",
        "Die Labyrinth-Generierung selbst nutzt einen Backtracking-Algorithmus, während der entfernteste Ausgang mit BFS gefunden wird. Beide Algorithmen habe ich von Grund auf implementiert.",
        null,
        "Zur besseren Zugänglichkeit gibt es einen Sprachwechsel, der sowohl die Oberfläche übersetzt als auch die Spracherkennung auf Englisch, Spanisch oder Deutsch umstellt.",
        "Die UI liefert fortlaufend Feedback mit Popups und Animationen, sodass Nutzer wissen, wann das System lauscht oder Kommandos erkennt.",
        "Künftige Versionen bekommen Schwierigkeitsgrade und anpassbare Größen. Im Moment ist Voice Maze eine solide Demo für multimodale Interaktion."
      ]
    },
    "edgeml-football": {
      title: "EdgeML Meets American Football — Taktischer KI-Analyzer",
      content: [
        null,
        "Mein bislang ambitioniertestes Uni-Projekt. Wir haben ein komplettes Edge-KI-System gebaut, das American-Football-Spielzüge in Echtzeit analysiert und auf einem Nvidia Jetson Orin Nano läuft.",
        "Repository anzeigen",
        "Ich habe die Kernarchitektur und mehrere Rollen übernommen: Scrum Master, Lead Developer für die Video-Pipeline, OCR-Integration, Formationserkennung und das Web Hub. Die größte technische Hürde war, schwere Videoströme zu verarbeiten, ohne die CPU zu überlasten. Deshalb habe ich eine asynchrone Producer-Consumer-Pipeline mit Threading entworfen, die die Bildrate stabil hielt.",
        "Für die Erkennung von Trikotnummern reichte rohes OCR nicht aus. Ich habe ein eigenes Legibility Model mit YOLO gebaut, das unscharfe oder unbrauchbare Ausschnitte herausfiltert, bevor sie überhaupt in EasyOCR landen. Durch die Auslagerung in einen separaten asynchronen Thread mit smarter Caching-Strategie stiegen die OCR-Ergebnisse deutlich, während gleichzeitig viel Rechenleistung gespart wurde.",
        null,
        "Auch die Formationserkennung war ein großer Meilenstein. Bildklassifikationsmodelle scheiterten wegen Verdeckungen und fehlender Perspektive. Sobald wir eine Homography-Engine hatten, die die Pixel auf ein 2D-Feld abbildet, wechselte ich die Logik auf ein XGBoost-Modell. Mit synthetisch eingefügten NaN-Werten im Training zur Simulation fehlender Spieler erreichte das Modell eine beeindruckende Genauigkeit.",
        null,
        "Damit das Tool für Coaches wirklich nutzbar ist, habe ich ein Web Hub mit FastAPI und React gebaut. Der Jetson Nano sendet ein lokales WLAN, sodass sich Coaches mit dem Handy verbinden und ein Live-Dashboard mit Telemetrie, Videostreams und Playcards ohne Internet nutzen können.",
        null,
        "Dieses Projekt hat mich in Softwarearchitektur, Computer Vision und Machine Learning stark gefordert. Von der Stabilisierung der Tracking-Pfade mit temporalem Pooling bis zur nahtlosen React-FastAPI-Kommunikation zeigt es, wie sich komplexe Systeme auf begrenzter Hardware elegant orchestrieren lassen."
      ]
    }
  }
};

export function getLocalizedProjectData(project, language) {
  const normalizedLanguage = language?.slice(0, 2) || "en";

  if (normalizedLanguage === "en") {
    return project;
  }

  const languagePack = projectTranslations[normalizedLanguage];
  const fallbackPack = projectTranslations.es;

  const translation = languagePack?.[project.id] || fallbackPack?.[project.id];

  if (!translation) {
    return project;
  }

  return {
    ...project,
    title: translation.title || project.title,
    content: project.content.map((item, index) => {
      const translatedText = translation.content?.[index];

      if (!translatedText) {
        return item;
      }

      if (item.type === "paragraph" || item.type === "button") {
        return {
          ...item,
          text: translatedText
        };
      }

      return item;
    })
  };
}

export function getProjectTranslation(projectId, language) {
  const normalizedLanguage = language?.slice(0, 2) || "en";
  const languagePack = projectTranslations[normalizedLanguage] || projectTranslations.es;
  return languagePack?.[projectId] || null;
}

export default projectTranslations;
