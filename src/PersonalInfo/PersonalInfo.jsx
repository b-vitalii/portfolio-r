import React from "react";
import { LocationOn, Phone, Mail, Web, Class } from "@material-ui/icons";
import PersonalInfoItem from "../PersonalInfoItem/PersonalInfoItem";

export default function PersonalInfo() {
  let data = [
    {
      title: "Birthday",
      desc: "24 jul 1990",
    },
    {
      title: "Age",
      desc: "32",
    },
    {
      title: "Website",
      desc: "www.domain.com",
    },
    {
      title: "Email",
      desc: "vitalii.boiko@gmail.com",
    },
    {
      title: "Phone",
      desc: "+380975555555",
    },
    {
      title: "City",
      desc: "Kyiv",
    },
    {
      title: "Freelnace",
      desc: "Available",
    },
  ];
  return (
    <div className="personal-info padd-15">
      <div className="row">
        <PersonalInfoItem data={data} />
      </div>
      <div className="row">
        <div className="buttons padd-15">
          <button
            href="#contact"
            data-section-index="1"
            className="btn hire-me"
          >
            Hire Me
          </button>
        </div>
      </div>
    </div>
  );
}
