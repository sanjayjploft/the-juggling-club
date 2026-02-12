"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function SkillCompletion() {
  const data = {
    labels: [
      "3-Ball Cascade",
      "3-Ball Shower",
      "4-Ball Fountain",
      "5-Ball Cascade",
      "Flash Trick",
    ],
    datasets: [
      {
        label: "Attempted",
        data: [28, 22, 18, 15, 12],
        backgroundColor: "#9e9e9e",
        borderRadius: 0,
        barThickness: 60,
      },
      {
        label: "Completed",
        data: [23, 18, 14, 11, 7],
        backgroundColor: "#3f5bff",
        borderRadius: 0,
        barThickness: 60,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#cfd8dc",
          usePointStyle: true,
          pointStyle: "circle",
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#b0bec5",
          maxRotation: 40,
          minRotation: 40,
        },
        grid: {
          color: "rgba(255,255,255,0.15)",
          borderDash: [4, 4],
        },
      },
      y: {
        min: 0,
        max: 28,
        ticks: {
          stepSize: 7,
          color: "#b0bec5",
          autoSkip: false, // 🔥 IMPORTANT
        },
        grid: {
          color: "rgba(255,255,255,0.15)",
        },
      },
    },
  };

  return (
    <div className="progress-card">
      <div className="chart-headiang">
        <h4>Skill Completion Rates</h4>
        <p>Most attempted skills and completion percentages</p>
      </div>
      <div
        style={{
          width: "100%",
          height: "420px",
        }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}
