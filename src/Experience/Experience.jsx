import React from "react";
import TimelineItem from "../TimelineItem/TimelineItem";
import style from "../Experience/Experience.module.css";

export default function Experience() {
  let data = [
    {
      year: "2021-present",
      title: "Play To Max",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sapiente explicabo dolor, quibusdam vero impedit sint eligendi dolorem tenetur, dolore nam voluptates quidem placeat dignissimos facere temporibus omnis veniam molestias.",
    },
    {
      year: "2013-2021",
      title: "Plane building",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sapiente explicabo dolor, quibusdam vero impedit sint eligendi dolorem tenetur, dolore nam voluptates quidem placeat dignissimos facere temporibus omnis veniam molestias.",
    },
    {
      year: "2011-2013",
      title: "Sales manager",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sapiente explicabo dolor, quibusdam vero impedit sint eligendi dolorem tenetur, dolore nam voluptates quidem placeat dignissimos facere temporibus omnis veniam molestias.",
    },
  ];
  return (
    <div className={style.experience}>
      <h3 className={style.title}>Experience</h3>
      <div className={style.row}>
        <div className={style.timeline_box}>
          <div className={style.timeline + " " + style.shadow_dark}>
            <TimelineItem data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}
