import { LuBadgeDollarSign } from "react-icons/lu";
import { SlNotebook } from "react-icons/sl";
import { BiCoinStack } from "react-icons/bi";
import { BsHandbag } from "react-icons/bs";

export const cardData = [
  {
    icon: <LuBadgeDollarSign />,
    bgColor: "bg-green-200",
    title: "Earning",
    price: "$198k",
    inc: "\u2191 37.8% ",
    desc: "this month",
  },
  {
    icon: <SlNotebook />,
    bgColor: "bg-purple-200",
    title: "Orders",
    price: "$2.4k",
    dec: "\u2193 2% ",
    desc: "this month",
  },
  {
    icon: <BiCoinStack />,
    bgColor: "bg-blue-200",
    title: "Balance",
    price: "$2.4k",
    dec: "\u2193 2% ",
    desc: "this month",
  },
  {
    icon: <BsHandbag />,
    bgColor: "bg-pink-200",
    title: "Total Sales",
    price: "$198k",
    inc: "\u2191 11% ",
    desc: "this week",
  },
];
