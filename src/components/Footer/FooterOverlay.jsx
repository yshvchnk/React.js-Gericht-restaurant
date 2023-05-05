import React from "react";

import "./FooterOverlay.css";

const FooterOverlay = () => {
    return (
        <div className="app__footer-overlay">
            <div className="app__footer-overlay-black" />
            <div className="app__footer-overlay-img app__bg" />
        </div>
    );
};

export default FooterOverlay;
