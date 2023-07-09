import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";

Chart.register(LineElement, CategoryScale, LinearScale, PointElement);

const Chart1 = () => {
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const data = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Dataset 1",
        data: [100, 420, 80, 450, 180],
        backgroundColor: "#f26c6d",
        borderColor: "#9BDD7C",
        pointBorderColor: "transparent",
        pointBorderWidth: 6,
        tension: 0.5,
      },
      {
        label: "Dataset 2",
        data: [200, 390, 200, 300, 220, 100, 480],
        backgroundColor: "#f26c6d",
        borderColor: "#f26c6d",
        pointBorderColor: "transparent",
        pointBorderWidth: 6,
        tension: 0.5,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: false,
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        min: 0,
        max: 500,
        ticks: {
          stepSize: 100,
        },
        grid: {},
      },
    },
  };


  return (
    <div className="w-[70vw] h-[250px]">
      <Line
        data={data}
        options={options}
        width={`${windowSize[0]} >1000 ? :'1200px': '500px'`}
        height="250px"
      ></Line>
    </div>
  );
};

export default Chart1;
