import React from "react";
import TimelineItem from "../TimelineItem/TimelineItem";

export default function Education() {
  let data = [
    {
      year: "2007-2013",
      title: "Master In Plane Building",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sapiente explicabo dolor, quibusdam vero impedit sint eligendi dolorem tenetur, dolore nam voluptates quidem placeat dignissimos facere temporibus omnis veniam molestias.",
    },
    {
      year: "2013-2015",
      title: "Phone app",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sapiente explicabo dolor, quibusdam vero impedit sint eligendi dolorem tenetur, dolore nam voluptates quidem placeat dignissimos facere temporibus omnis veniam molestias.",
    },
    {
      year: "2015-2018",
      title: "Web Design",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sapiente explicabo dolor, quibusdam vero impedit sint eligendi dolorem tenetur, dolore nam voluptates quidem placeat dignissimos facere temporibus omnis veniam molestias.",
    },
  ];
  return (
    <div className="education padd-15">
      <h3 className="title">Education</h3>
      <div className="row">
        <div className="timeline-box padd-15">
          <div className="timeline shadow-dark">
            <TimelineItem data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}
