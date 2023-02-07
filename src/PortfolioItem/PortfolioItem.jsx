import React from "react";
import style from "../PortfolioItem/PortfolioItem.module.css";

export default function PortfolioItem({ imgData }) {
  return (
    <>
      {imgData.map((img) => (
        <div className={style.portfolio_item}>
          <div className={style.portfolio_item_inner + " " + style.shadow_dark}>
            <div className={style.portfolio_img}>
              <img src={img} alt="" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
