import React from "react";
import SkillsItem from "../SkillsItem/SkillsItem";
import style from "../Skills/Skills.module.css";

export default function Skills() {
  let data = [
    {
      title: "JS",
      percent: "100%",
    },
    {
      title: "PHP",
      percent: "100%",
    },
    {
      title: "HTML",
      percent: "100%",
    },
    {
      title: "CSS",
      percent: "100%",
    },
  ];
  return (
    <div className={style.skills}>
      <div className={style.row}>
        <SkillsItem data={data} />
      </div>
    </div>
  );
}
