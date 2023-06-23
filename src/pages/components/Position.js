import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const Position = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    let chartInstance = null;

    const ctx = chartRef.current.getContext("2d");

    if (chartInstance) {
      chartInstance.destroy(); // Destroy previous chart instance
    }

    chartInstance = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["January", "February", "March", "April", "May", "June"],
        color: "red",
        datasets: [
          {
            data: [100, 200, 150, 300, 250, 400],
            fill: true, // Enable fill for gradient design
            borderColor: "#4552BB",

            backgroundColor: "#4552bb30",
          },
        ],
      },
      options: {
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

  return <canvas className="w-[100%] h-[290px]" ref={chartRef} />;
};

export default Position;
