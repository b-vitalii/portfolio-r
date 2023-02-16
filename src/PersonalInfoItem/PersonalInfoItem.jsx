import React from "react";
import { LocationOn, Phone, Mail, Web, Class } from "@material-ui/icons";
import style from "../PersonalInfoItem/PersonalInfoItem.module.css";

export default function PersonalInfoItem({ data }) {
  return (
    <>
      {data.map(({ title, desc }) => (
        <div className={style.info_item + " " + style.padd_15}>
          <p>
            {title} : <span>{desc}</span>
          </p>
        </div>
      ))}
    </>
  );
}
