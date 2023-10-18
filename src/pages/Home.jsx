import React from "react";
import { GoSearch } from "react-icons/go";
import { AiOutlineMenu } from "react-icons/ai";
import { cardData } from "../constants/cardData";
import Card from "../components/home/Card";
import BarChart from "../charts/BarChart";
import DonnutChart from "../charts/DonutChart";
import Table from "../components/home/Table";

const Home = ({ setShowMenu }) => {
  return (
    <section className="w-full bg-blue-50 py-5 px-8 md:px-14 overflow-hidden">
      <div className="flex justify-between items-center flex-col gap-2 sm:gap-0 sm:flex-row">
        <AiOutlineMenu
          onClick={() => setShowMenu(true)}
          className="text-xl absolute top-6 left-5 sm:hidden cursor-pointer"
        />
        <p className="font-semibold">Hello Shahrukh 👋,</p>
        <div className="flex items-center gap-2 bg-white px-2 py-1 rounded-md">
          <GoSearch />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4  mt-5 gap-[3rem]">
        {cardData.map((card) => (
          <Card {...card} />
        ))}
      </div>

      <div className="flex gap-5 justify-between flex-col xl:flex-row mt-10">
        <BarChart />
        <DonnutChart />
      </div>

      <Table />
    </section>
  );
};

export default Home;
