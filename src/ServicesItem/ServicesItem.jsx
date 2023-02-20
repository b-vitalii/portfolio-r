import React from "react";
import { MobileFriendly, Computer, Palette, Web } from "@material-ui/icons";
import style from "../ServicesItem/ServicesItem.module.css";

export default function ServicesItem({ servicesData }) {
  return (
    <>
      {servicesData.map(({ title, description }) => (
        <div className={style.service_item + " " + style.padd_15}>
          <div className={style.service_item_inner}>
            <div className={style.icon}>
              <i className={style.fa}>
                {title === "Web Design" ? (
                  <Palette />
                ) : title === "Front-End Development" ? (
                  <Computer />
                ) : title === "Mobile Application" ? (
                  <MobileFriendly />
                ) : (
                  <Web />
                )}
              </i>
            </div>
            <h4>{title}</h4>
            <p>{description}</p>
          </div>
        </div>
      ))}
    </>
  );
}
