import React from "react";
import { Mail, Phone, LocationOn, Web } from "@material-ui/icons";

export default function ContactItem({ contactData }) {
  console.log(contactData);
  return (
    <>
      {contactData.map(({ title, description }) => (
        <div className="contact-info-item padd-15">
          <div className="icon">
            <i className="fa fa-phone">
              {title === "Call Us On" ? (
                <Phone />
              ) : title === "Email" ? (
                <Mail />
              ) : title === "Office" ? (
                <LocationOn />
              ) : (
                <Web />
              )}
            </i>
          </div>
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      ))}
    </>
  );
}
