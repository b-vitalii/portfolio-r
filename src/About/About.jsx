import React from "react";
import { LocationOn, Phone, Mail, Web, Class } from "@material-ui/icons";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import Skills from "../Skills/Skills";
import style from "./About.module.css";
import Education from "../Education/Education";
import Experience from "../Experience/Experience";

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>About Me</h2>
          </div>
        </div>
        <div className="row">
          <div className="about-content padd-15">
            <div className="row">
              <div className="about-text padd-15">
                <h3>
                  I`m Vitalii Boiko and <span>Web Developer</span>
                </h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
                  consequuntur inventore maiores totam doloremque. Laborum
                  dolores libero expedita quo temporibus quasi, quod aut tempora
                  ducimus vel iusto, recusandae saepe ratione!
                </p>
              </div>
            </div>
            <div className="row">
              <PersonalInfo />
              <Skills />
            </div>
            <div className="row">
              <Education />
              <Experience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
