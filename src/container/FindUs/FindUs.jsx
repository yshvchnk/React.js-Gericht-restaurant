import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";

const FindUs = () => {
    return (
        <div className="app__bg app__wrapper section__padding" id="contact">
            <div className="app__wrapper_info">
                <SubHeading title="Contact" />
                <h2
                    className="headtext__cormorant"
                    style={{ marginBottom: "3rem" }}
                >
                    Find Us
                </h2>
                <div className="app__wrapper-content">
                    <p className="p__opensans">
                        Lane Ends Bungalow, Whatcroft Hall Lane, Rudhealth, CW9
                        75G
                    </p>
                    <p
                        className="p__cormorant"
                        style={{ color: "#dcca87", margin: "2rem o" }}
                    >
                        Opening hours
                    </p>
                    <p className="p__opensans">
                        Mon - Fri: 10:00 am - 02:00 am
                    </p>
                    <p className="p__opensans">
                        Sat - Sun: 10:00 am - 03:00 am
                    </p>
                </div>
                <button
                    type="button"
                    className="custom__button"
                    style={{ marginTop: "2rem" }}
                >
                    Visit Us
                </button>
            </div>
            <div className="app__wrapper_img">
                <img src={images.findus} alt="find_us" />
            </div>
        </div>
    );
};

export default FindUs;
