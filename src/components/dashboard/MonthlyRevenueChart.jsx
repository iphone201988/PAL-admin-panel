import React from "react";
import ReactApexChart from "react-apexcharts";

const MonthlyRevenueChart = () => {
  const series = [
    {
      name: "Revenue",
      data: [50, 70, 20, 90, 60, 110], // Example earnings per month
    },
  ];

  const options = {
    chart: {
      type: "bar",
      height: 350,
    },
    title: {
      text: "Monthly Revenue",
      align: "left",
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    },
    yaxis: {
      title: {
        text: "Revenue ($)",
      },
    },
    tooltip: {
      y: {
        formatter: (val) => `$${val}`,
      },
    },
    colors: ["#3b82f6"],
  };

  return (
    <div className="bg-white p-6 rounded shadow mt-6">
      <h2 className="text-lg font-medium mb-4">Monthly Revenue</h2>
      <ReactApexChart options={options} series={series} type="bar" height={350} />
    </div>
  );
};

export default MonthlyRevenueChart;
