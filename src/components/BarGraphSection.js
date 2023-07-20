import React from "react";
import "./BarGraphSection.css";
import BarGraph from "./BarGraph";

function BarGraphSection({ labels, data, heading, rightHeading }) {
  return (
    <div className="barGraphSection">
      <div className="upperBox">
        <div className="headingg">{heading}</div>
        <div className="rightBox">{rightHeading}</div>
      </div>
      <div className="graphh">
        <BarGraph className="barGraph" labels={labels} data={data} />
      </div>
    </div>
  );
}

export default BarGraphSection;
