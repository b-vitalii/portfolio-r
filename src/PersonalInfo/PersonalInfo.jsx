import React, { useState } from "react";
import { LocationOn, Phone, Mail, Web, Class } from "@material-ui/icons";
import PersonalInfoItem from "../PersonalInfoItem/PersonalInfoItem";
import style from "../PersonalInfo/PersonalInfo.module.css";
// import Modal from "../Modal/Modal";

export default function PersonalInfo({ openModal }) {
  let data = [
    {
      title: "Birthday",
      desc: "24 jul 1990",
    },
    {
      title: "Age",
      desc: "32",
    },
    {
      title: "Website",
      desc: "www.domain.com",
    },
    {
      title: "Email",
      desc: "vitalii.boiko@gmail.com",
    },
    {
      title: "Phone",
      desc: "+380975555555",
    },
    {
      title: "City",
      desc: "Kyiv",
    },
    {
      title: "Freelnace",
      desc: "Available",
    },
  ];

  return (
    <div className={style.personal_info}>
      <div className={style.row}>
        <PersonalInfoItem data={data} />
      </div>
      <div className={style.row}>
        <div className={style.buttons}>
          <button
            href="#contact"
            data-section-index="1"
            className={style.btn + " " + style.hire_me}
            onClick={openModal}
          >
            Hire Me
          </button>
        </div>
      </div>
    </div>
  );
}
