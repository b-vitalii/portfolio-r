import React from "react";
import PortfolioItem from "../PortfolioItem/PortfolioItem";
import img1 from "../images/portfolio/1.jpg";
import img2 from "../images/portfolio/2.jpg";
import img3 from "../images/portfolio/3.jpg";
import img4 from "../images/portfolio/4.jpg";
import img5 from "../images/portfolio/5.jpg";
import img6 from "../images/portfolio/6.jpg";

export default function Portfolio() {
  let imgData = [img1, img2, img3, img4, img5, img6];
  return (
    <section className="portfolio section" id="portfolio">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Portfolio</h2>
          </div>
        </div>
        <div className="row">
          <div className="portfolio-heading padd-15">
            <h2>My Last Projects :</h2>
          </div>
        </div>
        <div className="row">
          <PortfolioItem imgData={imgData} />
        </div>
      </div>
    </section>
  );
}
