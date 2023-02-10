import React from "react";
import ContactItem from "../ContactItem/ContactItem";
import ContactForm from "../ContactForm/ContactForm";
import style from "../Contact/Contact.module.css";

export default function Contact({ status }) {
  let contactData = [
    {
      title: "Call Us On",
      description: "+380975555555",
    },
    {
      title: "Office",
      description: "Kyiv",
    },
    {
      title: "Email",
      description: "vitalii.boiko@gmail.com",
    },
    {
      title: "Website",
      description: "www.domain.com",
    },
  ];

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
          <div className={style.section_title}>
            <h2>Contact Me</h2>
          </div>
        </div>
        <h3 className={style.contact_title}>Have you any question ?</h3>
        <h4 className={style.contact_sub_title}>I`M AT YOUR SERVICES</h4>
        <div className={style.row}>
          <ContactItem contactData={contactData} />
        </div>
        <h3 className={style.contact_title}>SEND ME AN EMAIL</h3>
        <h4 className={style.contact_sub_title}>
          I`M VERY RESPONSIVE TO MESSAGE
        </h4>
        <ContactForm />
      </div>
    </section>
  );
}
