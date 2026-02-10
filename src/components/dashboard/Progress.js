"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: true,
    },
  },
  scales: {
    x: {
      ticks: {
        color: "#9ca3af",
      },
      grid: {
        color: "#64748b",
        borderDash: [4, 6], // ✅ vertical dashed
        drawBorder: false,
      },
      border: {
        display: true,
        color: "#64748b",
        width: 1,
        dash: [4, 6], // ✅ Y-axis dashed border
      },
    },
    y: {
      min: 0,
      max: 80,
      ticks: {
        stepSize: 20,
        color: "#9ca3af",
      },
      grid: {
        color: "#475569", // horizontal grid (solid)
      },
    },
  },
};

const data = {
  labels: [
    "Week 1",
    "Week 2",
    "Week 3",
    "Week 4",
    "Week 5",
    "Week 6",
    "Week 7",
  ],
  datasets: [
    {
      data: [5, 18, 23, 37, 43, 58, 72],
      borderColor: "#0A5FFF", // blue line
      backgroundColor: "#0A5FFF",
      tension: 0.35,
      borderWidth: 2,
      pointRadius: 4,
      pointHoverRadius: 5,
      pointBackgroundColor: "#ffffff",
      pointBorderColor: "#2563eb",
      pointBorderWidth: 2,
    },
  ],
};

export default function ProgressChart() {
  return (
    <div className="progress-card">
      <div className="chart-headiang">
        <h4>Skills Completed Over Time</h4>
        <p>Cumulative skills completed across all teams (Last 7 weeks)</p>
      </div>
      <div
        style={{
          width: "100%",
          height: "420px",
        }}>
        <Line options={options} data={data} />
      </div>
      <div className="skills-completed">Skills Completed</div>
    </div>
  );
}
