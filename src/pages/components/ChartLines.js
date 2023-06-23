import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const ChartLines = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    let chartInstance = null;

    const ctx = chartRef.current.getContext("2d");

    if (chartInstance) {
      chartInstance.destroy(); // Destroy previous chart instance
    }

    chartInstance = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["1", "2", "3", "4", "5", "6", "7", "9", "20"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3, 10, 5, 7],
            backgroundColor: [
              "#d5daed",
              "#4552bb",
              "#d5daed",
              "#d5daed",
              "#d5daed",
              "#d5daed",
              "#d5daed",
              "#4552bb",
              "#d5daed",
            ],
            borderWidth: 0, // Set the border width to 0
          },
        ],
      },
      options: {
        scales: {
          x: {
            display: false, // Hide the x-axis labels
            grid: {
              display: false, // Hide the x-axis grid lines
            },
          },
          y: {
            display: false, // Hide the y-axis labels
            grid: {
              display: false, // Hide the y-axis grid lines
            },
            beginAtZero: true,
          },
        },
        plugins: {
          legend: {
            display: false, // Hide the legend labels
          },
          tooltip: {
            enabled: false, // Disable tooltips
          },
        },
      },
    });

    return () => {
      if (chartInstance) {
        chartInstance.destroy(); // Clean up the chart instance on unmount
      }
    };
  }, []);

  return <canvas className="d w-[290px] h-[260px] " ref={chartRef} />;
};

export default ChartLines;
