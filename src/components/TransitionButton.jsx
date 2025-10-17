import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TransitionButton = ({ to, label, color = "#0171e3", extraClass="" }) => {
    const [isExpanding, setIsExpanding] = useState(false);
    const navigate =  useNavigate();

    const handleExpantion = () => {
        setIsExpanding(true);

        setTimeout(() => {
            navigate(to);
            setIsExpanding(false);
        }, 750);
    };

    return(
        <>
            <button 
                className={`work transition-button ${isExpanding ? "expand" : ""} ${extraClass}`}
                onClick={handleExpantion}
                style={{
                    backgroundColor: color,
                }}
            >
                {label}
            </button>
        </>
    );
};

export default TransitionButton;