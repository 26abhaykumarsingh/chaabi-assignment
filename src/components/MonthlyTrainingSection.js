import React from "react";
import "./MonthlyTrainingSection.css";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { responsiveFontSizes } from "@mui/material";

function MonthlyTrainingSection() {
  return (
    <div className="monthlyTrainingSection">
      <div className="headinggg">Monthly Training Activity</div>
      <div className="downn">
        <div className="subHeading">
          <div className="upSign">
            <ArrowUpwardIcon fontSize="small" />
          </div>
          16% more enrollees this month
        </div>
        <div className="listContainer">
          <div className="list">
            <div className="a">
              <div className="ring"></div>course a
            </div>
            <div className="b">23 Workers Took This Course this Week</div>
          </div>
          <div className="list">
            <div className="a">
              <div className="ring"></div>course b
            </div>
            <div className="b">253 Workers Took This Course this Week</div>
          </div>
          <div className="list">
            <div className="a">
              <div className="ring"></div>course c
            </div>
            <div className="b">253 Workers Took This Course this Week</div>
          </div>
          <div className="list">
            <div className="a">
              <div className="ring"></div>course d
            </div>
            <div className="b">253 Workers Took This Course this Week</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MonthlyTrainingSection;
