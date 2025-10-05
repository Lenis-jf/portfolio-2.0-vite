// Aísla la variable de entorno en una constante de archivo.
// Al usar la sintaxis "import.meta.env.BASE_URL", Vite la reemplaza.

const BASE = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL
    : import.meta.env.BASE_URL + '/';

export const getProjectAssetUrl = (path) => {
    return `${BASE}assets/imgs/${path}`;
};

export const getGithubIconUrl = (isDarkMode) => {
    const iconName = isDarkMode ? "github-logo-light.svg" : "github-logo.svg";
    return `${BASE}assets/icons/${iconName}`;
};

export const getIcon = (icon, isDarkMode) => {
    let iconMode = "";

    if(!icon.includes("logo"))
        iconMode = isDarkMode ? "-light" : "-dark";

    return `${BASE}assets/icons/${icon}${iconMode}.svg` 
}