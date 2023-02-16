import React from "react";
import TimelineItem from "../TimelineItem/TimelineItem";
import style from "../Education/Education.module.css";

export default function Education() {
  let data = [
    {
      year: "2007-2013",
      title: "Master In Plane Building",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sapiente explicabo dolor, quibusdam vero impedit sint eligendi dolorem tenetur, dolore nam voluptates quidem placeat dignissimos facere temporibus omnis veniam molestias.",
    },
    {
      year: "2013-2015",
      title: "Phone app",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sapiente explicabo dolor, quibusdam vero impedit sint eligendi dolorem tenetur, dolore nam voluptates quidem placeat dignissimos facere temporibus omnis veniam molestias.",
    },
    {
      year: "2015-2018",
      title: "Web Design",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sapiente explicabo dolor, quibusdam vero impedit sint eligendi dolorem tenetur, dolore nam voluptates quidem placeat dignissimos facere temporibus omnis veniam molestias.",
    },
  ];
  return (
    <div className={style.education + " " + style.padd_15}>
      <h3 className={style.title}>Education</h3>
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
