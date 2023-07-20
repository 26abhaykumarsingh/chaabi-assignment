import React from "react";
import "./DonutChartSection.css";
import DonutChart from "./DonutChart";

function DonutChartSection({ data }) {
  return (
    <div className="donutChartSection">
      <div className="headinggg">Chapter Wise Status</div>
      <div className="chart">
        <DonutChart className="donutChart" data={data} />
      </div>
      <div className="third">
        <div>
          <div className="circle circle1"></div>
          <div className="text">Finished Training</div>
        </div>
        <div>
          <div className="circle circle2"></div>
          <div className="text">Chapter B</div>
        </div>
        <div>
          <div className="circle circle3"></div>
          <div className="text">Haven't Started yet</div>
        </div>
        <div>
          <div className="circle circle4"></div>
          <div className="text">Chapter A</div>
        </div>
        <div>
          <div className="circle circle5"></div>
          <div className="text">Chapter C</div>
        </div>
      </div>
    </div>
  );
}

export default DonutChartSection;
