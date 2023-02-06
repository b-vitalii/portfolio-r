import React from "react";

export default function TimelineItem({ data }) {
  return (
    <>
      {data.map(({ year, title, description }) => (
        <div className="timeline-item">
          <div className="circle-dot"></div>
          <h3 className="timeline-date">
            <i className="fa fa-calendar"></i> {year}
          </h3>
          <h4 className="timeline-title">{title}</h4>
          <p className="timeline-text">{description}</p>
        </div>
      ))}
    </>
  );
}
