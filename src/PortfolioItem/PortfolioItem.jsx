import React from "react";
import style from "../PortfolioItem/PortfolioItem.module.css";

export default function PortfolioItem({ portfolioData }) {
  const porfolioItemClick = () => {
    console.log(`Porfolio Item Click`);
  };
  return (
    <>
      {portfolioData.map(({ img, title, description }) => (
        <div
          className={style.portfolio_item + " " + style.padd_15}
          onClick={porfolioItemClick}
        >
          <div
            className={
              style.portfolio_item_inner +
              " " +
              style.shadow_dark +
              " " +
              style.front
            }
          >
            <div className={style.portfolio_img}>
              <img src={img} alt="" />
            </div>
          </div>
          <div className={style.back}>
            <div className={style.back_content + " " + style.center}>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
