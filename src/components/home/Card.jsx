import React from "react";

const Card = ({ icon, bgColor, title, price, inc, dec, desc }) => {
  return (
    <div className="bg-white rounded-md p-5 flex items-center gap-3 w-fit">
      <div className={`${bgColor} p-6 rounded-full text-[2.5rem]`}>{icon}</div>
      <div>
        <p className="text-xs text-gray-400 font-semibold">{title}</p>
        <p className="text-lg font-bold">{price}</p>
        <p className="text-sm">
          <span
            className={`${inc && "text-green-500"} ${dec && "text-red-500"}`}
          >
            {inc && inc} {dec && dec}
          </span>
          {desc}
        </p>
      </div>
    </div>
  );
};

export default Card;
