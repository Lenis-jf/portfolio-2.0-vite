import React from "react";

const Loader = () => {
    return(
        <div className="loader" role="status" aria-live="polite" aria-label="Loading">
            <img src={`${import.meta.env.BASE_URL}assets/icons/logo-small.svg`} alt="Loading" className="loading-logo" />
        </div>        
    );
};

export default Loader;