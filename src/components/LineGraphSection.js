import React from "react";
import "./LineGraphSection.css";
import LineGraph from "./LineGraph";

import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";

function LineGraphSection({
  heading,
  bigNumber,
  leftNumber,
  rightNumber,
  color,
  bgColor,
}) {
  const data = {
    labels: ["M", "T", "W", "T", "F", "S", "S"],
    values: [0, 40, 25, 25, 50, 30, 0],
  };
  return (
    <div className="lineGraphSection">
      <div className="heading">
        <h6>{heading}</h6>
      </div>
      <div className="lowerBox">
        <div className="leftBox">
          <div className="bigNumber">{bigNumber}</div>
          <div className="lowerLowerBox">
            <div
              className="leftNumber"
              style={{ color: `${color}`, backgroundColor: `${bgColor}` }}
            >
              <TrendingUpRoundedIcon
                className="upIcon"
                style={{ color: `${color}`, border: `1.5px solid ${color}` }}
              />
              {leftNumber}
            </div>
            <div className="rightNumber">{rightNumber}</div>
          </div>
        </div>
        <div className="graph">
          <LineGraph className="lineGraph" data={data} color={color} />
        </div>
      </div>
    </div>
  );
}

export default LineGraphSection;
