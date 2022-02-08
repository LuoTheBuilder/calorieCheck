import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return <div className={classes.footer}>Built by LuoTheBuilder © {year}</div>;
};

export default Footer;
