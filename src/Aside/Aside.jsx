import React from "react";
import {
  Home,
  ImportContacts,
  Panorama,
  Receipt,
  Person,
} from "@material-ui/icons";
import style from "./Aside.module.css";

export default function Aside() {
  return (
    <div className={style.aside}>
      <div className={style.logo}>
        <a href="#">
          <span>V</span>Boi<span>Ko</span>
        </a>
      </div>
      <div className={style.nav_toggler}>
        <span></span>
      </div>
      <ul className={style.nav}>
        <li>
          <a href="#home" className={style.active}>
            <Home /> Home
          </a>
        </li>
        <li>
          <a href="#about">
            <Person /> About
          </a>
        </li>
        <li>
          <a href="#services">
            <Receipt /> Services
          </a>
        </li>
        <li>
          <a href="#portfolio">
            <Panorama /> Portfolio
          </a>
        </li>
        <li>
          <a href="#contact">
            <ImportContacts /> Contact
          </a>
        </li>
      </ul>
    </div>
  );
}
