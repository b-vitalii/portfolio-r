import React from "react";

export default function SkillsItem({ data }) {
  return (
    <>
      {data.map(({ title, percent }) => (
        <div className="skill-item padd-15">
          <h5>{title}</h5>
          <div className="progress">
            <div className="progress-in"></div>
            <div className="skill-percent">{percent}</div>
          </div>
        </div>
      ))}
    </>
  );
}
