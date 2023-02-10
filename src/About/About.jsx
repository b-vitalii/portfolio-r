import React, { useState } from "react";
import { LocationOn, Phone, Mail, Web, Class } from "@material-ui/icons";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import Skills from "../Skills/Skills";
import style from "./About.module.css";
import Education from "../Education/Education";
import Experience from "../Experience/Experience";
import cross from "../images/cross.png";

export default function About({ status }) {
  const [openModal, setOpenModal] = useState(false);

  const open = () => {
    console.log("Open Modal");
    setOpenModal(true);
  };

  const close = () => {
    console.log("Close modal");
    setOpenModal(false);
  };
  return (
    <section
      className={
        style.about +
        " " +
        style.section +
        " " +
        (status.about ? style.active : "")
      }
      id="about"
    >
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
              <PersonalInfo openModal={open} />
              <Skills />
            </div>
            <div className={style.row}>
              <Education />
              <Experience />
            </div>
          </div>
        </div>
      </div>
      {openModal && (
        <div className={style.overlay}>
          <div className={style.modal}>
            <img className={style.cross} src={cross} onClick={close} />
            <img
              className={style.big_image}
              src="https://thumbs.gfycat.com/ColossalWeepyAtlanticblackgoby-size_restricted.gif"
            />
            <h3>Phone/Telegram: +380971003369</h3>
          </div>
        </div>
      )}
    </section>
  );
}
