import React from "react";
import "./TopLine.css";
import Contacts from "./Contacts";
import Socials from "./Socials";
import Languages from "./Languages";
import Account from "./Account";

const TopLine = () => {
  return <div className="top-line-general">
    <Contacts />
    <Socials />
    <Languages />
    <Account />

  </div>;
};

export default TopLine;
