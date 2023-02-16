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
          <div className={style.section_title + " " + style.padd_15}>
            <h2>About Me</h2>
          </div>
        </div>
        <div className={style.row}>
          <div className={style.about_content + " " + style.padd_15}>
            <div className={style.row}>
              <div className={style.about_text + " " + style.padd_15}>
                <h3>
                  I`m Vitalii Boiko and <span>Web Developer</span>
                </h3>
                <p>
                  I've been in development for over a year, mostly working with
                  JavaScript and libraries like React. I pay attention to
                  various little things in order to achieve the highest quality
                  result. Willing to learn new and expand my current knowledge
                  of the above as needed to the point that it makes me do my job
                  faster, better and more efficiently. My background experience
                  includes more than 8 years in aviation industry. Five years in
                  aircraft maintenance and more than three years as aircraft
                  reliability engineer. I've experience in analytics and
                  experience of providing training courses for technicians. I’m
                  easy learning, self-motivated, responsible, open mind person
                  and always optimistic. My background experience gives me such
                  skills as accuracy and attention to details, strong analytical
                  and communication skills, tolerant to stressed situations,
                  active team player, accepting feedback and applying lessons
                  learned.
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
