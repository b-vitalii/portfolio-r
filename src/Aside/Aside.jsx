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
    <div className="aside">
      <div className="logo">
        <a href="#">
          <span>V</span>Boiko
        </a>
      </div>
      <div className="nav-toggler">
        <span></span>
      </div>
      <ul className="nav">
        <li>
          <a href="#home" className="active">
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
