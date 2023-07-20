import React from "react";
import "./Charts.css";
import LineGraphSection from "./LineGraphSection";
import BarGraph from "./BarGraph";
import BarGraphSection from "./BarGraphSection";
import DonutChartSection from "./DonutChartSection";
import DonutChart from "./DonutChart";
import DonutLowerChart from "./DonutLowerChart";
import MonthlyTrainingSection from "./MonthlyTrainingSection";

function Charts() {
  const labels1 = [
    "3 Jun",
    "4 Jun",
    "5 Jun",
    "6 Jun",
    "7 Jun",
    "8 Jun",
    "9 Jun",
    "10 Jun",
    "11 Jun",
    "12 Jun",
    "13 Jun",
    "14 Jun",
  ];
  const labels2 = ["S", "M", "T", "W", "T", "F", "S", "M", "T", "W"];
  const data1 = [100, 120, 120, 220, 280, 200, 220, 100, 280, 320, 350, 400];
  const data2 = [30, 60, 40, 60, 40, 70, 40, 30, 50, 40];
  const donutData = {
    labels: [
      "Finished Training",
      "Chapter B",
      "Haven't Started Yet",
      "Chapter A",
      "Chapter C",
    ],
    values: [22, 20, 7, 22, 34],
    colors: ["#b4ceff", "white", "white", "white", "white"],
  };
  const donut2Data = {
    labels: ["Passed", "Failed"],
    values: [1423, 134],
    colors: ["#018e42", "#ed1b24"],
  };
  return (
    <div className="charts">
      <div className="child one">
        <LineGraphSection
          heading={"% Workers Passing Quiz"}
          bigNumber={"95%"}
          leftNumber={"20%"}
          rightNumber={"24%"}
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
          heading={"% Workers Passing Quiz"}
          bigNumber={"95%"}
          leftNumber={"20%"}
          rightNumber={"24%"}
          color={"rgba(7, 145, 70, 1)"}
          bgColor={"#e7f4eb"}
        />
      </div>
      <div className="child five">
        <DonutChartSection data={donutData} />
      </div>
      <div className="child six">
        <BarGraphSection
          labels={labels1}
          data={data1}
          heading={"Last 14 Days Active Days in Training"}
          rightHeading={"Last 14 Days"}
        />
      </div>
      <div className="child seven">
        <div className="sevenOne">
          <MonthlyTrainingSection />
        </div>
        <div className="sevenTwo">
          <DonutLowerChart data={donut2Data} />
        </div>
        <div className="sevenThree">
          <BarGraphSection
            labels={labels2}
            data={data2}
            heading={"Daily Training Completions"}
            rightHeading={"Last 7 Days"}
          />
        </div>
      </div>
    </div>
  );
}

export default Charts;
