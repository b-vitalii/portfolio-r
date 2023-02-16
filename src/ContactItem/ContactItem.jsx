import React from "react";
import {
  Mail,
  Phone,
  LocationOn,
  Web,
  Telegram,
  LinkedIn,
  GitHub,
  Instagram,
} from "@material-ui/icons";
import style from "../ContactItem/ContactItem.module.css";

export default function ContactItem({ contactData }) {
  // console.log(contactData);
  return (
    <>
      {contactData.map(({ title, description, link }) => (
        <div className={style.contact_info_item + " " + style.padd_15}>
          <div className={style.icon}>
            <i className="fa fa-phone">
              {title === "Call Us On" ? (
                <Phone />
              ) : title === "Email" ? (
                <Mail />
              ) : title === "Office" ? (
                <LocationOn />
              ) : title === "Telegram" ? (
                <Telegram />
              ) : title === "LinkedIn" ? (
                <LinkedIn />
              ) : title === "GitHub" ? (
                <GitHub />
              ) : title === "Instagram" ? (
                <Instagram />
              ) : (
                <Web />
              )}
            </i>
          </div>
          <h4>{title}</h4>
          {/* <p>{description}</p> */}
          <a href={link}>{description}</a>
        </div>
      ))}
    </>
  );
}
