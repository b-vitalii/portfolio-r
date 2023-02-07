import React from "react";
import style from "../SkillsItem/SkillsItem.module.css";

export default function SkillsItem({ data }) {
  return (
    <>
      {data.map(({ title, percent }) => (
        <div className={style.skill_item}>
          <h5>{title}</h5>
          <div className={style.progress}>
            <div className={style.progress_in}></div>
            <div className={style.skill_percent}>{percent}</div>
          </div>
        </div>
      ))}
    </>
  );
}
