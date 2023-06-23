import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const ChartWaves = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    let chartInstance = null;

    var ctx = chartRef.current.getContext("2d");

    if (chartInstance) {
      chartInstance.destroy(); // Destroy previous chart instance
    }

    chartInstance = new Chart(ctx, {
      type: "line", // Changed the type to "line" for wave chart
      data: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sept",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            label: "# of Votes",
            data: [29, 40, 60, 52, 60, 84, 25, 60, 50, 10, 29, 10],
            backgroundColor: [
              "#d5daed",
              "#4552bb",
              "#d5daed",
              "#d5daed",
              "#d5daed",
              "#d5daed",
              "#d5daed",
              "#d5daed",
              "#d5daed",
              "#4552bb",
              "#d5daed",
              "#d5daed",
            ],
            borderWidth: 0, // Set the border width to 0
            lineTension: 0.4, // Adjust the line tension to create a wave-like appearance
            fill: true, // Fill the area under the line
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        elements: {
          line: {
            tension: 0, // Disable the default line tension
            borderWidth: 2, // Set the line width
            borderColor: "#4552bb", // Set the line color
            borderCapStyle: "rounded", // Set rounded ends for the line
          },
        },
        plugins: {
          legend: {
            display: false, // Hide the legend
          },
        },
        scales: {
          x: {
            display: true, // Hide the x-axis
            grid: {
              display: false,
            },
          },
          y: {
            display: true, // Hide the y-axis
            grid: {
              display: false,
            },
          },
        },
        layout: {
          padding: {
            top: 5,
            bottom: 5,
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

  return <canvas className="w-[250px] h-[490px]" ref={chartRef} />;
};

export default ChartWaves;
