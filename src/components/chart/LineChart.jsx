import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register komponen Chart.js agar bisa digunakan
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// eslint-disable-next-line react/prop-types
const LineChart = ({ className }) => {
  // Data untuk chart
  const data = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "none",
        data: [28, 48, 40, 19, 86, 27, 50, 24, 73, 8, 12, 69],
        borderColor: "rgba(20, 102, 255, 1)",
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        tension: 0.4,
      },
    ],
  };

  // Opsi untuk konfigurasi chart
  const options = {
    responsive: true,
    maintainAspectRatio: false, // Supaya grafik sesuai ukuran parent
    plugins: {
      legend: {
        display: false, // Sembunyikan legenda (opsional)
      },
      title: {
        display: false,
      },
    },
    layout: {
      padding: 10, // Tambahkan padding internal jika diperlukan
    },
    scales: {
      x: {
        grid: {
          display: false, // Hilangkan grid untuk sumbu X
        },
      },
      y: {
        grid: {
          display: false, // Hilangkan grid untuk sumbu Y
        },
      },
    },
  };

  return (
    <div className={`relative w-full h-full ${className}`}>
      {/* Wrapper Canvas */}
      <div className="w-full h-full">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default LineChart;
