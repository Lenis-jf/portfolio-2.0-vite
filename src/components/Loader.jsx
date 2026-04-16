import React from "react";
import { useTranslation } from "react-i18next";

const Loader = () => {
    const { t } = useTranslation();

    return(
        <div className="loader" role="status" aria-live="polite" aria-label={t("loader.loadingAria")}>
            <img src={`${import.meta.env.BASE_URL}assets/icons/logo-small.svg`} alt={t("loader.loadingAlt")} className="loading-logo" />
        </div>        
    );
};

export default Loader;