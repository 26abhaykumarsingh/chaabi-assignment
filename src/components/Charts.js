import React from "react";
import "./Charts.css";
import LineGraphSection from "./LineGraphSection";

function Charts() {
  return (
    <div className="charts">
      <div className="child one">
        <LineGraphSection
          heading={"In Training Workers"}
          bigNumber={"3,354"}
          leftNumber={"20%"}
          rightNumber={"234"}
          color={"rgba(7, 145, 70, 1)"}
          bgColor={"#e7f4eb"}
        />
      </div>
      <div className="child two">
        <LineGraphSection
          heading={"Video Watch-Time (Hrs)"}
          bigNumber={"2,433"}
          leftNumber={"20%"}
          rightNumber={"435"}
          color={"rgba(237, 29, 37, 1)"}
          bgColor={"#fce8e9"}
        />
      </div>
      <div className="child three">
        <LineGraphSection
          heading={"% Workers Passing Quiz"}
          bigNumber={"95%"}
          leftNumber={"20%"}
          rightNumber={"24%"}
          color={"rgba(7, 145, 70, 1)"}
          bgColor={"#e7f4eb"}
        />
      </div>
      <div className="child four">
        <LineGraphSection
          heading={"Avg. Days Taken"}
          bigNumber={"6"}
          leftNumber={"20%"}
          rightNumber={"3"}
          color={"rgba(7, 145, 70, 1)"}
          bgColor={"#e7f4eb"}
        />
      </div>
      <div className="child five"></div>
      <div className="child six"></div>
      <div className="child seven">
        <div className="sevenOne"></div>
        <div className="sevenTwo"></div>
        <div className="sevenThree"></div>
      </div>
    </div>
  );
}

export default Charts;
