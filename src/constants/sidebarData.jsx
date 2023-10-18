import { LuLayoutDashboard } from "react-icons/lu";
import { BsBox, BsPersonCircle } from "react-icons/bs";
import { BiCoinStack } from "react-icons/bi";
import { SiMarketo } from "react-icons/si";
export const menus = [
  {
    title: "Dashboard",
    icon: <LuLayoutDashboard />,
    link: "/dashboard",
  },
  {
    title: "Products",
    icon: <BsBox />,
    link: "/products",
    submenus: [
      {
        title: "All Products",
        link: "/products/all",
      },
      {
        title: "Add Product",
        link: "/products/add",
      },
      {
        title: "Categories",
        link: "/products/categories",
      },
    ],
  },
  {
    title: "Customer",
    icon: <BsPersonCircle />,
    link: "/customer",
    submenus: [
      {
        title: "All Customers",
        link: "/customers/all",
      },
      {
        title: "Add Customer",
        link: "/customers/add",
      },
      {
        title: "Groups",
        link: "/customers/groups",
      },
    ],
  },
  {
    title: "Income",
    icon: <BiCoinStack />,
    link: "/income",
  },
  {
    title: "Promote",
    icon: <SiMarketo />,
    link: "/promote",
  },
];
