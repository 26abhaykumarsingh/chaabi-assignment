import React, { useEffect, useRef } from "react";
import { Chart as ChartJS } from "chart.js/auto";

function BarGraph({ labels, data }) {
  console.log(labels, data);
  const chartRef = useRef(null);

  useEffect(() => {
    let chartInstance;

    if (chartRef && chartRef.current) {
      const ctx = chartRef.current.getContext("2d");

      if (chartInstance) {
        chartInstance.destroy();
      }

      chartInstance = new ChartJS(ctx, {
        type: "bar",
        // data: {
        //   labels: [
        //     "3 Jun",
        //     "4 Jun",
        //     "5 Jun",
        //     "6 Jun",
        //     "7 Jun",
        //     "8 Jun",
        //     "9 Jun",
        //     "10 Jun",
        //     "11 Jun",
        //     "12 Jun",
        //     "13 Jun",
        //     "14 Jun",
        //   ],
        //   datasets: [
        //     {
        //       label: "# of Days",
        //       data: [
        //         100, 120, 120, 220, 280, 200, 220, 100, 280, 320, 350, 400,
        //       ],
        //       borderWidth: 1,
        //       backgroundColor: "#397eff",
        //       barPercentage: 0.3,
        //       borderRadius: 10,
        //     },
        //   ],
        // },
        data: {
          labels: labels,
          datasets: [
            {
              label: "# of Days",
              data: data,
              borderWidth: 1,
              backgroundColor: "#397eff",
              barPercentage: 0.3,
              borderRadius: 10,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              grid: {
                display: false, // Hide the y-axis grid lines
              },
              ticks: {
                font: {
                  size: 8, // Set the font size of the x-axis labels
                },
              },
            },
            x: {
              grid: {
                display: false, // Hide the x-axis grid lines
              },
              ticks: {
                font: {
                  size: 8, // Set the font size of the x-axis labels
                },
              },
            },
          },
          plugins: {
            legend: {
              display: false, // Hide the legend
            },
          },
          responsive: true, // Enable responsiveness
          maintainAspectRatio: false, // Disable default aspect ratio
          layout: {},
        },
      });
    }

    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [chartRef]);

  return (
    <div>
      <canvas ref={chartRef} id="myChart"></canvas>
    </div>
  );
}

export default BarGraph;
