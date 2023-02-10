import React from "react";
import style from "../PortfolioItem/PortfolioItem.module.css";

export default function PortfolioItem({ portfolioData }) {
  const porfolioItemClick = () => {
    console.log(`Porfolio Item Click`);
  };
  return (
    <>
      {portfolioData.map(({ img, title }) => (
        <div className={style.portfolio_item} onClick={porfolioItemClick}>
          <div className={style.portfolio_item_inner + " " + style.shadow_dark}>
            <div className={style.portfolio_img}>
              <img src={img} alt="" />
            </div>

            <div className={style.back}>
              <div className={style.back_content + " " + style.center}>
                <h3>{title}</h3>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
