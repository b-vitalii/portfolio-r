import React from "react";
import ContactItem from "../ContactItem/ContactItem";
import ContactForm from "../ContactForm/ContactForm";

export default function Contact() {
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
    <section className="contact section" id="contact">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Contact Me</h2>
          </div>
        </div>
        <h3 className="contact-title padd-15">Have you any question ?</h3>
        <h4 className="contact-sub-title padd-15">I`M AT YOUR SERVICES</h4>
        <div className="row">
          <ContactItem contactData={contactData} />
        </div>
        <h3 className="contact-title padd-15">SEND ME AN EMAIL</h3>
        <h4 className="contact-sub-title padd-15">
          I`M VERY RESPONSIVE TO MESSAGE
        </h4>
        <ContactForm />
      </div>
    </section>
  );
}
