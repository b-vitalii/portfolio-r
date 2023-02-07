import React from "react";
import { LocationOn, Phone, Mail, Web, Class } from "@material-ui/icons";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import Skills from "../Skills/Skills";
import style from "./About.module.css";
import Education from "../Education/Education";
import Experience from "../Experience/Experience";

export default function About() {
  return (
    <section className={style.about + " " + style.section} id="about">
      <div className={style.container}>
        <div className={style.row}>
          <div className={style.section_title}>
            <h2>About Me</h2>
          </div>
        </div>
        <div className={style.row}>
          <div className={style.about_content}>
            <div className={style.row}>
              <div className={style.about_text}>
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
            <div className={style.row}>
              <PersonalInfo />
              <Skills />
            </div>
            <div className={style.row}>
              <Education />
              <Experience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
