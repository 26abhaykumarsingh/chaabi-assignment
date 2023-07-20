import React from "react";
import "./DonutLowerChart.css";
import DonutChart from "./DonutChart";

function DonutLowerChart({ data, cutout }) {
  return (
    <div className="donutLowerChart">
      <div className="headinggg">Quiz Passing%</div>
      <div className="down">
        <div className="chartt">
          <DonutChart className="donutChart" data={data} cutout={cutout} />
        </div>
        <div className="second">
          <div>
            <div className="circle circle6"></div>
            <div className="text">Passed</div>
          </div>
          <div>
            <div className="circle circle7"></div>
            <div className="text">Failed</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DonutLowerChart;
