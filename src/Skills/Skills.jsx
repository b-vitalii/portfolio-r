import React from "react";
import SkillsItem from "../SkillsItem/SkillsItem";

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
    <div className="skills padd-15">
      <div className="row">
        <SkillsItem data={data} />
      </div>
    </div>
  );
}
