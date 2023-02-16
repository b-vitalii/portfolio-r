import React from "react";
import { CalendarTodayOutlined } from "@material-ui/icons";
import style from "../TimelineItem/TimelineItem.module.css";

export default function TimelineItem({ data }) {
  return (
    <>
      {data.map(({ year, title, description }) => (
        <div className={style.timeline_item}>
          <div className={style.circle_dot}></div>
          <h3 className={style.timeline_date}>
            <i className={style.fa}>
              <CalendarTodayOutlined />
            </i>{" "}
            {year}
          </h3>
          <h4 className={style.timeline_title}>{title}</h4>
          <p className={style.timeline_text}>{description}</p>
        </div>
      ))}
    </>
  );
}
