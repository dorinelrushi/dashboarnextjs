import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const HorizontalBar = () => {
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
            data: [29, 40, 30, 52, 30, 14, 10, 10, 21, 10, 29, 10],
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
            borderWidth: 0,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        indexAxis: "x", // Set the axis to be horizontal
        elements: {
          bar: {
            borderWidth: 0,
            borderSkipped: "end", // Skip borders on one end of the bars for a thinner appearance
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            display: true,
            grid: {
              display: false, // Hide the x-axis grid lines
            },
          },
          y: {
            display: false, // Show the y-axis
            ticks: {
              font: {
                size: 5, // Adjust the font size for y-axis labels
              },
              maxTicksLimit: 5, // Limit the number of y-axis ticks
            },
          },
        },
        layout: {
          padding: {
            top: 2,
            bottom: 0,
          },
        },
      },
    });

    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);

  return <canvas className="w-[100px] h-[280px]" ref={chartRef} />;
};

export default HorizontalBar;
