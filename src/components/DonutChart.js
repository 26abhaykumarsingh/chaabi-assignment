import React, { useEffect, useRef } from "react";
import { Chart as ChartJS } from "chart.js/auto";

function DonutChart({ data, cutout }) {
  const chartRef = useRef(null);

  useEffect(() => {
    let chartInstance;

    if (chartRef && chartRef.current) {
      const ctx = chartRef.current.getContext("2d");

      if (chartInstance) {
        chartInstance.destroy();
      }

      chartInstance = new ChartJS(ctx, {
        type: "doughnut",
        data: {
          labels: data.labels,
          datasets: [
            {
              data: data.values,
              backgroundColor: data.colors,
              borderWidth: 1,
              borderColor: "#d4d4d4",
            },
          ],
        },
        options: {
          //   responsive: true,
          //   maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
              position: "right",
            },
          },
          cutout: cutout,
        },
      });
    }

    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [chartRef, data]);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <canvas ref={chartRef} id="myChart"></canvas>
    </div>
  );
}

export default DonutChart;
