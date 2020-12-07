import React from "react";
import "./TopLine.css";
import { BsFillEnvelopeOpenFill } from "react-icons/bs";
import { BsGeoAlt } from "react-icons/bs";
import { BsChatSquareFill } from "react-icons/bs";

const Contacts = () => {
  return (
    <div className="contacts-left">
      <div className="contacts-item">
        <BsFillEnvelopeOpenFill className="icon-style" />
        mindqaugas@inbox.lt
      </div>
      <div className="contacts-item">
        <BsChatSquareFill className="icon-style" />
        +37067373342
      </div>
      <div className="contacts-item">
        <BsGeoAlt className="icon-style" />
        H.Manto g. 11, Klaipeda, Lietuva
      </div>
    </div>
  );
};

export default Contacts;
