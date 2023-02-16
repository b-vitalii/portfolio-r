import React, { useState } from "react";
import ContactItem from "../ContactItem/ContactItem";
import ContactForm from "../ContactForm/ContactForm";
import style from "../Contact/Contact.module.css";

export default function Contact({ status }) {
  const [openFrame, setOpenFrame] = useState(false);

  let contactData = [
    {
      title: "Call Us On",
      description: "+380975555555",
      // link: "",
    },
    {
      title: "Office",
      description: "Kyiv",
      // link: "",
    },
    {
      title: "Email",
      description: "vitalii.boiko@gmail.com",
      // link: "",
    },
    {
      title: "Website",
      description: "www.domain.com",
      // link: "",
    },
    {
      title: "Telegram",
      description: "vitaly_boiko",
      link: "https://t.me/vitaly_boiko",
    },
    {
      title: "LinkedIn",
      description: "Vitalii Boiko",
      link: "https://www.linkedin.com/in/vitalii-boiko-149860b0/?locale=en_US",
    },
    {
      title: "GitHub",
      description: "Vitalii Boiko",
      link: "https://github.com/b-vitalii",
    },
    {
      title: "Instagram",
      description: "Vitalii Boiko",
      link: "https://github.com/b-vitalii",
    },
  ];

  const startGame = () => {
    console.log("Start game");
    setOpenFrame(!openFrame);
  };

  return (
    <section
      className={
        style.contact +
        " " +
        style.section +
        " " +
        (status.contact ? style.active : "")
      }
      id="contact"
    >
      <div className={style.container}>
        <div className={style.row}>
          <div className={style.section_title + " " + style.padd_15}>
            <h2>Contact Me</h2>
          </div>
        </div>
        <h3 className={style.contact_title + " " + style.padd_15}>
          Have you any question ?
        </h3>
        <h4 className={style.contact_sub_title + " " + style.padd_15}>
          I`M AT YOUR SERVICES
        </h4>
        <div className={style.row}>
          <ContactItem contactData={contactData} />
        </div>
        <h3 className={style.contact_title + " " + style.padd_15}>
          SEND ME AN EMAIL
        </h3>

        <button className={style.btn} onClick={startGame}>
          Play game
        </button>

        <h4 className={style.contact_sub_title}>
          I`M VERY RESPONSIVE TO MESSAGE
        </h4>
        {/* 
        <Frameset rows="50%, 50%">
          <Frame src="https://reactjs.org/docs/faq-styling.html"></Frame>
        </Frameset> */}
        {/* <ContactForm /> */}
        {openFrame && (
          <iframe
            id="GameId"
            title="Game"
            width="900"
            height="800"
            src="https://b-vitalii.github.io/aviation-quiz/"
          ></iframe>
        )}
      </div>
    </section>
  );
}
