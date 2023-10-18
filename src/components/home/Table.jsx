import React from "react";
import { GoSearch } from "react-icons/go";
import tableData from "../../constants/tableData";

const Table = () => {
  return (
    <div className="mt-10 bg-white rounded-md p-5 overflow-auto sm:overflow-hidde">
      <div className="flex justify-between gap-5 whitespace-nowrap">
        <p className="text-lg font-semibold">Product Sell</p>
        <div className="flex gap-5">
          <div className="bg-gray-50 flex gap-2 items-center rounded-md px-2 py-1 w-60">
            <GoSearch />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none"
            />
          </div>
          <p className="bg-gray-50 px-2 py-1 rounded-md text-sm text-gray-400">
            Last 30 days
          </p>
        </div>
      </div>
      <table className="w-full mt-2 ">
        <thead>
          <tr className="pr-5 text-slate-500 text-sm">
            <td className="pr-5 ">Product Name</td>
            <td className="pr-5 ">Stock</td>
            <td className="pr-5 ">Price</td>
            <td className="pr-5 ">Total Sales</td>
          </tr>
        </thead>
        <tbody>
          {tableData?.map((table) => {
            return (
              <tr>
                <td className="pr-5 w-60 font-semibold flex items-center">
                  <img src={table.image} alt="image" className="w-16" />
                  {table.productName}
                </td>
                <td className="pr-5 sm:w-24">{table.stock}</td>
                <td className="pr-5 sm:w-24">{table.price}</td>
                <td className="pr-5 sm:w-24">{table.total}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
