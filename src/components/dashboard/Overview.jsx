
import React from "react";
import { Line } from "react-chartjs-2";
import MonthlyRevenueChart from "./MonthlyRevenueChart";
import Loader from "../Loader";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, TimeScale, Title, Tooltip, Legend,} from "chart.js";
import Typography from "@mui/material/Typography";
import { useGetAnalyticsInsightsQuery } from "../../rtk/api/adminApi";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  TimeScale,
  Title,
  Tooltip,
  Legend
);



const Overview = () => {

  const { data, error,  isLoading } = useGetAnalyticsInsightsQuery();

  console.log("Analytics Data:", data?.data);
console.log("Is loading:", isLoading);

  const month = data?.data?.userGrowth?.map((item) => item.month);
  const userDataSet = data?.data?.userGrowth?.map((item) => item.user);
  



  const lineData = {
    labels: month,
    datasets: [
      {
        label: "User Growth",
        data: userDataSet,
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59, 130, 246, 0.2)",
        tension: 0.4,
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };



  return (
    <div className="sm:p-6 bg-gray-100 min-h-screen bg-gradient-to-b from-gray-100 to-gray-300">
       <Typography
                    variant="h5"
                    component="h1"
                    fontWeight="bold"
                    className="text-2xl sm:text-3xl bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent relative pb-2"
                    sx={{
                      borderBottom: "2px solid #4B5EAA",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.02)",
                      },
                    }}
                  >
                   Dashboard Overview
                  </Typography>

        {isLoading ? (
        <Loader />
      ) : error ? (
        <Typography color="error" p={4}>Failed to Load Dashboard.</Typography>
      ) : (
        <>
          {/* Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white p-4 rounded shadow">
              <h2 className="text-base sm:text-lg font-medium">Total Users</h2>
              <p className="text-xl sm:text-2xl font-bold">
                {data?.data?.totalUsers}
              </p>
              {data?.data?.userPercentageFromLastMonth !== undefined && (
                <p
                  className={`text-sm ${
                    data.data.userPercentageFromLastMonth < 0
                      ? "text-red-500"
                      : "text-green-600"
                  }`}
                >
                  {data.data.userPercentageFromLastMonth > 0 ? "+" : ""}
                  {data.data.userPercentageFromLastMonth}% from last month
                </p>
              )}
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h2 className="text-base sm:text-lg font-medium">Revenue</h2>
              <p className="text-xl sm:text-2xl font-bold">$5,000</p>
            </div>
          </div>

          {/* Line Charts */}
          <div className="flex flex-col lg:flex-row gap-6 mb-6">
            <div className="flex-1 bg-white p-4 rounded shadow">
              <h2 className="text-base sm:text-lg font-medium mb-2 sm:mb-4">
                User Growth Over Time
              </h2>
              <div className="relative w-full h-64 sm:h-72 md:h-80">
                <Line data={lineData} options={lineOptions} />
              </div>
            </div>
          </div>

          {/* Monthly Revenue Chart */}
          <div className="bg-white p-4 rounded shadow">
            <MonthlyRevenueChart />
          </div>
        </>
      )}
    </div>
  );
};

export default Overview;





