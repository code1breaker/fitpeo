import React from "react";
import ReactApexChart from "react-apexcharts";
import { BiChevronDown } from "react-icons/bi";

const options = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: "80%",
      borderRadius: 8,
      dataLabels: {
        enabled: false,
      },
      colors: {
        ranges: [
          {
            from: 0,
            to: 100,
            color: "#e1dded",
          },
        ],
      },
    },
  },
  xaxis: {
    labels: {
      show: true,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
  legend: {
    show: false,
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
};

const series = [
  {
    name: "Monthly Data",
    data: [25, 30, 40, 35, 50, 45, 50, 26, 30, 50, 40, 60],
  },
];

const BarChart = () => {
  return (
    <div className="bg-white rounded-md xl:w-[60%]">
      <div className="flex justify-between items-center p-5">
        <div>
          <p className="font-bold text-lg">Overview</p>
          <p className="text-gray-400 text-sm">Monthly View</p>
        </div>
        <p className="text-gray-400 text-sm bg-gray-50 py-1 px-3 rounded-md flex justify-between items-center">
          Quantity
          <BiChevronDown className="text-xl" />
        </p>
      </div>
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        // width="700"
        height="250"
      />
    </div>
  );
};

export default BarChart;
