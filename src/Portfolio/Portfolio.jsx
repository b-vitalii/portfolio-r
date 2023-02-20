import React, { useState } from "react";
import PortfolioItem from "../PortfolioItem/PortfolioItem";
import img1 from "../images/portfolio/Playable1.gif";
import img2 from "../images/portfolio/Playable2.gif";
import img3 from "../images/portfolio/Playable3.gif";
import img4 from "../images/portfolio/Playable4.gif";
import img5 from "../images/portfolio/Playable5.gif";
import img6 from "../images/portfolio/Playable6.gif";
import img7 from "../images/portfolio/Playable7.gif";
import img8 from "../images/portfolio/Playable8.gif";
import img9 from "../images/portfolio/Playable9.gif";
import img10 from "../images/portfolio/Playable10.gif";
import img11 from "../images/portfolio/Playable11.gif";
import img12 from "../images/portfolio/Playable12.gif";
import img13 from "../images/portfolio/Playable13.gif";
import img14 from "../images/portfolio/Playable14.gif";
import img15 from "../images/portfolio/Playable15.gif";
import img16 from "../images/portfolio/Playable16.gif";
import style from "../Portfolio/Portfolio.module.css";
// import Modal from "../Modal/Modal";

export default function Portfolio({ status }) {
  // let imgData = [img1, img2, img3, img4, img5, img6];

  let portfolioData = [
    {
      img: img1,
      title: "Candy crush soda saga",
      description:
        "The game is written before Valentine's holiday using javascript, Tween, Proton library.",
    },
    {
      img: img2,
      title: "Bingo",
      description:
        "The game is written to a popular bingo game using javascript, Tween, Proton library.",
    },
    {
      img: img3,
      title: "Braindoku",
      description:
        "Logical game Braindoku puzzle, using javascript, Tween library.",
    },
    {
      img: img4,
      title: "Happy Clinic",
      description:
        "Playable to the popular game Happy Clinic using javascript, Tween, Proton library.",
    },
    {
      img: img5,
      title: "Lilys garden",
      description: "Matching game using javascript, Tween, Proton library.",
    },
    {
      img: img6,
      title: "Trade game",
      description:
        "The game with random reproduction of the graph and guessing the final position using javascript, Tween, Proton library.",
    },
    {
      img: img7,
      title: "Scatter slots",
      description:
        "Scatter slots game using javascript, Tween, Proton library.",
    },
    {
      img: img8,
      title: "Sherlock",
      description:
        "A series of games about Sherlock with the mechanics of finding objects due to the movement of the background using javascript, Tween, Proton library.",
    },
    {
      img: img9,
      title: "Sherlock",
      description:
        "A series of games about Sherlock with the mechanics of finding objects due to the movement of the glass using javascript, Tween, Proton library.",
    },
    {
      img: img10,
      title: "Scatter slots",
      description:
        "Scatter slots game using javascript, Tween, Proton library.",
    },
    {
      img: img11,
      title: "Smurfs match run",
      description:
        "Popular matching game with a smurf character using javascript, Tween, Proton library.",
    },
    {
      img: img12,
      title: "Solitaire barbecue",
      description:
        "A series of card games using javascript, Tween, Proton library.",
    },
    {
      img: img13,
      title: "Spider character",
      description:
        "A series of card games using javascript, Tween, Proton library.",
    },
    {
      img: img14,
      title: "Spider romance",
      description:
        "A series of card games using javascript, Tween, Proton library.",
    },
    {
      img: img15,
      title: "Solitaire meditation",
      description:
        "A series of card games using javascript, Tween, Proton library.",
    },
    {
      img: img16,
      title: "Super brain plus",
      description:
        "Logical game Braindoku puzzle, using javascript, Tween, Proton library.",
    },
  ];
  return (
    <section
      className={
        style.portfolio +
        " " +
        style.section +
        " " +
        (status.portfolio ? style.active : "")
      }
      id="portfolio"
    >
      <div className={style.container}>
        <div className={style.row}>
          <div className={style.section_title + " " + style.padd_15}>
            <h2>Portfolio</h2>
          </div>
        </div>
        <div className={style.row}>
          <div className={style.portfolio_heading + " " + style.padd_15}>
            <h2>My Last Projects :</h2>
          </div>
        </div>
        <div className={style.row}>
          <PortfolioItem portfolioData={portfolioData} />
        </div>
      </div>
    </section>
  );
}
