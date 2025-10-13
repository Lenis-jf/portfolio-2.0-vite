import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TransitionButton = ({ to, label, color = "#4F75FF" }) => {
    const [isExpanding, setIsExpanding] = useState(false);
    const navigate =  useNavigate();

    const handleExpantion = () => {
        setIsExpanding(true);

        setTimeout(() => {
            navigate(to);
            setIsExpanding(false);
        }, 600);
    };

    return(
        <>
            <button 
                className={`work transition-button ${isExpanding ? "expand" : ""}`}
                onClick={handleExpantion}>
                {label}
            </button>
        </>
    );
};

export default TransitionButton;