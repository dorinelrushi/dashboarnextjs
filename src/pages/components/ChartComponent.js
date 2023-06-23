import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const CircleChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    let chartInstance = null;

    const ctx = chartRef.current.getContext("2d");

    if (chartInstance) {
      chartInstance.destroy(); // Destroy previous chart instance
    }

    chartInstance = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Red", "Blue"],
        datasets: [
          {
            label: "Dataset",
            data: [5, 10],
            backgroundColor: ["#4552bb", "#d5daed"],
            borderWidth: 0,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        aspectRatio: 1, // Adjust this value to control the chart size
        plugins: {
          legend: {
            display: false,
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

  return <canvas className="d w-[100px] h-[100px] " ref={chartRef} />;
};

export default CircleChart;
