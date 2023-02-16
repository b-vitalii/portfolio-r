import React, { useState } from "react";
import {
  Home,
  ImportContacts,
  Panorama,
  Receipt,
  Person,
} from "@material-ui/icons";
import style from "./Aside.module.css";

export default function Aside({ handleClickAside, status }) {
  // console.log(status);
  // const [nav, setNuv] = useState({
  //   home: true,
  //   about: false,
  //   services: false,
  //   portfolio: false,
  //   contact: false,
  // });

  return (
    <div className={style.aside}>
      <div className={style.logo}>
        <a href="#home">
          <span>V</span>Boi<span>Ko</span>
        </a>
      </div>
      <div className={style.nav_toggler}>
        <span></span>
      </div>
      <ul className={style.nav}>
        <li>
          <a
            href="#home"
            className={status.home ? style.active : ""}
            onClick={(e) => handleClickAside(e)}
          >
            <Home /> Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className={status.about ? style.active : ""}
            onClick={(e) => handleClickAside(e)}
          >
            <Person /> About
          </a>
        </li>
        <li>
          <a
            href="#services"
            className={status.services ? style.active : ""}
            onClick={(e) => handleClickAside(e)}
          >
            <Receipt /> Services
          </a>
        </li>
        <li>
          <a
            href="#portfolio"
            className={status.portfolio ? style.active : ""}
            onClick={(e) => handleClickAside(e)}
          >
            <Panorama /> Portfolio
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={status.contact ? style.active : ""}
            onClick={(e) => handleClickAside(e)}
          >
            <ImportContacts /> Contact
          </a>
        </li>
      </ul>
    </div>
  );
}
