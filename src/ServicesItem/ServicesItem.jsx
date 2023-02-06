import React from "react";
import { MobileFriendly, Computer, Palette, Web } from "@material-ui/icons";

export default function ServicesItem({ servicesData }) {
  return (
    <>
      {servicesData.map(({ title, description }) => (
        <div className="service-item padd-15">
          <div className="service-item-inner">
            <div className="icon">
              <i className="fa fa-mobile-alt">
                {title === "Web Design" ? (
                  <Palette />
                ) : title === "Javascript" ? (
                  <Computer />
                ) : title === "Phone app" ? (
                  <MobileFriendly />
                ) : (
                  <Web />
                )}
              </i>
            </div>
            <h4>{title}</h4>
            <p>{description}</p>
          </div>
        </div>
      ))}
    </>
  );
}
