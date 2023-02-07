import React from "react";
import PortfolioItem from "../PortfolioItem/PortfolioItem";
import img1 from "../images/portfolio/1.jpg";
import img2 from "../images/portfolio/2.jpg";
import img3 from "../images/portfolio/3.jpg";
import img4 from "../images/portfolio/4.jpg";
import img5 from "../images/portfolio/5.jpg";
import img6 from "../images/portfolio/6.jpg";
import style from "../Portfolio/Portfolio.module.css";

export default function Portfolio() {
  let imgData = [img1, img2, img3, img4, img5, img6];
  return (
    <section className={style.portfolio + " " + style.section} id="portfolio">
      <div className={style.container}>
        <div className={style.row}>
          <div className={style.section_title}>
            <h2>Portfolio</h2>
          </div>
        </div>
        <div className={style.row}>
          <div className={style.portfolio_heading}>
            <h2>My Last Projects :</h2>
          </div>
        </div>
        <div className={style.row}>
          <PortfolioItem imgData={imgData} />
        </div>
      </div>
    </section>
  );
}
