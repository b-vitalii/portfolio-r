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
    <div className={style.skills + " " + style.padd_15}>
      <div className={style.row + " " + style.padd_15}>
        <h2>Skills</h2>
        <p>
          JavaScript, React, Redux, HTML5, CSS3, tween.js, howler.js, three.js,
          Sass (SCSS), BEM, Git, GitHub|GitLab, jQuery, Bootstrap, Ajax, Fetch,
          Axios, Handlebars, Webpack, Gulp, Photoshop, Figma, Trello|Jira.
        </p>
        {/* <SkillsItem data={data} /> */}
      </div>
    </div>
  );
}
