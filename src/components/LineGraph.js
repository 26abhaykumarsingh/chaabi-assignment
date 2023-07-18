import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const LineGraph = ({ data, color }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, `${color}`); // Start color
    gradient.addColorStop(0.47, "rgba(0, 0, 0, 0)"); // Mid color
    gradient.addColorStop(1, "rgba(0, 0, 0, 0)"); // End color

    const chart = new Chart(chartRef.current, {
      type: "line",
      data: {
        labels: data.labels,
        datasets: [
          {
            label: "Line Graph",
            data: data.values,
            fill: true, // Fill the area under the line
            backgroundColor: gradient,
            borderColor: "transparent",
            tension: 0,
            pointStyle: false,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        layout: {
          padding: {
            left: 0, // Adjust the left padding
            right: 0, // Adjust the right padding
            top: 0, // Adjust the top padding
            bottom: -5, // Adjust the bottom padding
          },
        },
        scales: {
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
          y: {
            beginAtZero: true,
            display: false,
          },
        },
        plugins: {
          legend: {
            display: false, // Hide the legend
          },
        },
      },
    });

    return () => {
      chart.destroy();
    };
  }, [data]);

  return <canvas ref={chartRef} />;
};

export default LineGraph;
