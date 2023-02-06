import React from "react";

export default function ContactItem({ contactData }) {
  console.log(contactData);
  return (
    <>
      {contactData.map(({ title, description }) => (
        <div className="contact-info-item padd-15">
          <div className="icon">
            <i className="fa fa-phone"></i>
          </div>
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      ))}
    </>
  );
}
