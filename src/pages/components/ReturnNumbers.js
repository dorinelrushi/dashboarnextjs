import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const ReturnNumbers = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    let chartInstance = null;

    var ctx = chartRef.current.getContext("2d");

    if (chartInstance) {
      chartInstance.destroy(); // Destroy previous chart instance
    }

    chartInstance = new Chart(ctx, {
      type: "bar",

      data: {
        labels: [
          "Jan 1",
          "Jan  2",
          "Jan 3",
          "Jan  4",
          "Jan 5",
          "Jan 6",
          "Jan 7",
          "Jan 9",
          "Jan  10",
          "Jan 11",
          "Jan 12",
          "Jan 13",
          "Jan 14",
          "Jan 15",
          "Jan 16",
          "Jan 17",
        ],
        datasets: [
          {
            label: "# of Votes",
            data: [2, 4, 3, 2, 3, 4, 1, 1, 2, 1, 2, 6, 8, 3, 1, 2],

            backgroundColor: [
              "#d5daed",
              "#4552bb",
              "#d5daed",
              "#d5daed",
              "#d5daed",
              "#4552bb",
              "#d5daed",
              "#d5daed",
              "#d5daed",
              "#4552bb",
              "#d5daed",
              "#d5daed",
              "#4552bb",
              "#d5daed",
            ],
            borderWidth: 0, // Set the border width to 0
            barThickness: 20, // Adjust the bar thickness to make them smaller
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        scales: {
          x: {
            display: true, // Hide the x-axis labels
            grid: {
              display: false, // Hide the x-axis grid lines
            },
          },
          y: {
            display: false, // Hide the y-axis labels
            grid: {
              display: true, // Hide the y-axis grid lines
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
        padding: {
          bottom: 10,
        },
      },
    });

    return () => {
      if (chartInstance) {
        chartInstance.destroy(); // Clean up the chart instance on unmount
      }
    };
  }, []);

  return <canvas className="w-[250px] h-[250px]" ref={chartRef} />;
};

export default ReturnNumbers;
