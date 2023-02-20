import React from "react";
import TimelineItem from "../TimelineItem/TimelineItem";
import style from "../Education/Education.module.css";

export default function Education() {
  let data = [
    {
      year: "2007-2013",
      title:
        "National Technical University of Ukraine «Igor Sikorsky Kyiv Polytechnic Institute»",
      description:
        "Faculty of Aviation and Space Systems. Master In Plane Building",
    },
    {
      year: "2020-2021",
      title: "«SkillUp» courses",
      description:
        "Projects development JS (GALLERY, MENU-PAGE, TIMER, COUNTIES-APP, PIXABAY-GALLERY, TELEGRAM-BOT); Group collaboration project (FILM POINT); Projects development React (SOCIAL-NETWORK-PAGE, FEEDBACK-APP, PHONEBOOK-APP,WEB-SITE,REACT-CHAT-APP, WEATHER-APP-PWA, AVIATION-QUIZ-GAME).",
    },
    {
      year: "2015-2018",
      title: "Web Design",
      description: "",
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
