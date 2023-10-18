import React from "react";
import ReactApexChart from "react-apexcharts";

const DonutChart = () => {
  const donutOptions = {
    plotOptions: {
      pie: {
        startAngle: 0,
        endAngle: 360,
        donut: {
          size: "65%",
          labels: {
            show: false,
          },
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    colors: ["#d94e96", "#6e3deb", "#e1dded"],
  };

  const donutSeries = [20, 45, 35];
  return (
    <div className="bg-white rounded-md flex flex-col items-center py-3 px-5 xl:w-[30%]">
      <div className="w-full">
        <p className="font-bold text-lg">Overview</p>
        <p className="text-gray-400 text-sm">Monthly View</p>
      </div>

      <div className="bg-white shadow-md flex items-center justify-center rounded-full w-64 h-64 relative py-5">
        <p className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-xs text-center">
          <span className="font-bold text-lg">65%</span>
          Total new customers
        </p>
        <ReactApexChart
          options={donutOptions}
          series={donutSeries}
          type="donut"
          // width="256"
        />
      </div>
    </div>
  );
};

export default DonutChart;
