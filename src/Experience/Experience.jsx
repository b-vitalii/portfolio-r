import React from "react";
import TimelineItem from "../TimelineItem/TimelineItem";
import style from "../Experience/Experience.module.css";

export default function Experience() {
  let data = [
    {
      year: "2021-present",
      title: "Play To Max",
      description:
        "Playable ads development, HTML5 games developing within the given specification.",
    },
    {
      year: "2013-2021",
      title: "Aviation industry",
      description:
        "My background experience includes more than 8 years in aviation. Five years in aircraft maintenance and more than three years as aircraft reliability engineer. I've experience in analytics and experience of providing training courses for technicians.",
    },
    {
      year: "2011-2013",
      title: "Sales manager",
      description: "",
    },
  ];
  return (
    <div className={style.experience + " " + style.padd_15}>
      <h3 className={style.title}>Experience</h3>
      <div className={style.row}>
        <div className={style.timeline_box + " " + style.padd_15}>
          <div className={style.timeline + " " + style.shadow_dark}>
            <TimelineItem data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}
