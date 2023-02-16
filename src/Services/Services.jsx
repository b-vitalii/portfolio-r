import React from "react";
import { MobileFriendly, Computer, Palette } from "@material-ui/icons";
import ServicesItem from "../ServicesItem/ServicesItem";
import style from "./Services.module.css";

export default function Services({ status }) {
  let servicesData = [
    {
      title: "Web Design",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sapiente explicabo dolor, quibusdam vero impedit sint eligendi dolorem tenetur, dolore nam voluptates quidem placeat dignissimos facere temporibus omnis veniam molestias.",
    },
    {
      title: "Web Design",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sapiente explicabo dolor, quibusdam vero impedit sint eligendi dolorem tenetur, dolore nam voluptates quidem placeat dignissimos facere temporibus omnis veniam molestias.",
    },
    {
      title: "Javascript",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sapiente explicabo dolor, quibusdam vero impedit sint eligendi dolorem tenetur, dolore nam voluptates quidem placeat dignissimos facere temporibus omnis veniam molestias.",
    },
    {
      title: "Phone app",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sapiente explicabo dolor, quibusdam vero impedit sint eligendi dolorem tenetur, dolore nam voluptates quidem placeat dignissimos facere temporibus omnis veniam molestias.",
    },
    {
      title: "Web Design",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sapiente explicabo dolor, quibusdam vero impedit sint eligendi dolorem tenetur, dolore nam voluptates quidem placeat dignissimos facere temporibus omnis veniam molestias.",
    },
    {
      title: "Web Design",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sapiente explicabo dolor, quibusdam vero impedit sint eligendi dolorem tenetur, dolore nam voluptates quidem placeat dignissimos facere temporibus omnis veniam molestias.",
    },
  ];
  return (
    <section
      className={
        style.service +
        " " +
        style.section +
        " " +
        (status.services ? style.active : "")
      }
      id="services"
    >
      <div className={style.container}>
        <div className={style.row}>
          <div className={style.section_title + " " + style.padd_15}>
            <h2>Services</h2>
          </div>
        </div>
        <div className={style.row}>
          <ServicesItem servicesData={servicesData} />
        </div>
      </div>
    </section>
  );
}
