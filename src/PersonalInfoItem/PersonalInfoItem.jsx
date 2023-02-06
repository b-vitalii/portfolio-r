import React from "react";
import { LocationOn, Phone, Mail, Web, Class } from "@material-ui/icons";

export default function PersonalInfoItem({ data }) {
  return (
    <>
      {data.map(({ title, desc }) => (
        <div className="info-item padd-15">
          <p>
            {title} : <span>{desc}</span>
          </p>
        </div>
      ))}
    </>
  );
}
