import React from "react";
import "./Skills.css";
export default function Skills() {
  const value = [
    {
      text: "HTML",
      percentage: "80%",
    },
    {
      text: "CSS",
      percentage: "80%",
    },
    {
      text: "Javascript",
      percentage: "80%",
    },
    {
      text: "Bootstrap",
      percentage: "70%",
    },
    {
      text: "MongoDB",
      percentage: "70%",
    },
    {
      text: "Node js",
      percentage: "40%",
    },
    {
      text: "React js",
      percentage: "50%",
    },
  ];

  return (
    <div>
      <div>
        <div className="row">
          {value.map((value, index) => {
            return (
              <div key={index} className="col-lg-6 col-md-6 col-sm-12 my-2">
                <span className="language">{value.text}</span>
                <div className="progress-some">
                  <div
                    className="progress-new"
                    style={{ width: `${value.percentage}` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
