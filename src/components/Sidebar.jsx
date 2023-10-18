import React, { useState } from "react";
import { LuLayoutDashboard } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";

import { menus } from "../constants/sidebarData";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";

const Sidebar = ({ showMenu, setShowMenu }) => {
  const [active, setActive] = useState("Dashboard");
  return (
    <aside
      className={`${
        showMenu ? "fixed w-full" : "hidden sticky"
      } sm:w-[15rem] xl:w-[18rem] z-10 bg-blue-700 text-white top-0 h-screen py-8 px-5 sm:flex flex-col justify-between`}
    >
      <div>
        <div className="flex items-center text-2xl gap-2 mb-6 px-2">
          <LuLayoutDashboard />
          <h1>Dashboard</h1>
        </div>

        <RxCross2
          onClick={() => setShowMenu(false)}
          className="absolute top-2 right-2 text-xl cursor-pointer"
        />

        <nav>
          {menus.map((menu) => {
            return (
              <div
                onClick={() => setActive(menu.title)}
                className={`relative my-1 rounded-md cursor-pointer`}
              >
                <p
                  className={`flex items-center gap-4 py-2  px-2 rounded-md text-md ${
                    active == menu.title && "bg-blue-200"
                  }`}
                >
                  {menu.icon}
                  {menu.title}
                  {menu.submenus && (
                    <BiChevronRight className="text-2xl absolute right-0" />
                  )}
                </p>
                {active == menu.title &&
                  menu.submenus &&
                  menu.submenus.map((submenu) => {
                    return (
                      <div className="ml-10 hover:text-blue-200">
                        {submenu.title}
                      </div>
                    );
                  })}
              </div>
            );
          })}
        </nav>
      </div>

      <div className="flex items-center gap-2 relative bg-blue-200 py-1 px-2 rounded-md">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSppkoKsaYMuIoNLDH7O8ePOacLPG1mKXtEng&usqp=CAU"
          alt="user"
          className="w-8 h-8"
        />
        <div className="text-xs">
          <p>Evano</p>
          <p>Project Manager</p>
        </div>
        <BiChevronDown className="text-2xl absolute right-0" />
      </div>
    </aside>
  );
};

export default Sidebar;
