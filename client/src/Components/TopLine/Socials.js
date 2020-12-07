import React from 'react';
import FacebookPik from "../../assets/icons/facebook.png";
import InstagramPik from "../../assets/icons/instagram.png";
import YoutubePik from "../../assets/icons/youtube.png";
const Socials = () => {
return(
    <div className="socials-right">
        <div className="socials-outer"><img src={FacebookPik} alt="Facebook" className="socials-icon" /></div>
        <div className="socials-outer"><img src={InstagramPik} alt="Instagram" className="socials-icon" /></div>
        <div className="socials-outer"><img src={YoutubePik} alt="Youtube" className="socials-icon-youtube" /></div>
    </div>
);
};

export default Socials;