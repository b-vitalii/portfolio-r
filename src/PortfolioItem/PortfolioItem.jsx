import React from "react";

export default function PortfolioItem({ imgData }) {
  return (
    <>
      {imgData.map((img) => (
        <div className="portfolio-item padd-15">
          <div className="portfolio-item-inner shadow-dark">
            <div className="portfolio-img">
              <img src={img} alt="" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
