import React from "react";
import { MobileFriendly, Computer, Palette } from "@material-ui/icons";
import ServicesItem from "../ServicesItem/ServicesItem";
import style from "./Services.module.css";

export default function Services({ status }) {
  let servicesData = [
    {
      title: "Front-End Development",
      description:
        "I love to visualize the tasks assigned to me and also give them dynamics, so that everything around seems to come to life.",
    },
    {
      title: "Web Design",
      description:
        "I think over the design of websites and applications created by me myself and try to make them as responsive and interactive as possible.",
    },
    {
      title: "Mobile Application",
      description:
        "One of my strongest interests and hobbies is mobile development. I love developing mobile applications that will be useful to people.",
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
