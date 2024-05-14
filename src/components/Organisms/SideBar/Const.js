import {
  DashboardIcon,
  DiscountIcon,
  GetHelp,
  Integrations,
  MenuCustomers,
  MenuMakceting,
  MenuOrders,
  MenuProducts,
  MyStore,
  Settings,
} from "../../../assets/Icons";
import MenuAnalytics from "../../../assets/Icons/menuAnalitics";

export const MAIN_LIST = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: DashboardIcon,
    to: "/",
  },
  {
    id: "orders",
    label: "Orders",
    icon: MenuOrders,
    to: "/orders",
  },
  {
    id: "products",
    label: "Products",
    icon: MenuProducts,
    to: "/products",
  },
  {
    id: "customers",
    label: "Customers",
    icon: MenuCustomers,
    to: "/customers",
  },
  {
    id: "analyticks",
    label: "Analytick",
    icon: MenuAnalytics,
    to: "/analyticks",
  },
  {
    id: "marketing",
    label: "Marketing",
    icon: MenuMakceting,
    to: "/marketing",
  },
];

export const SALES_LIST = [
  {
    id: "integrations",
    label: "Integrations",
    icon: Integrations,
    to: "/integrations",
  },

  {
    id: "myStore",
    label: "MyStore",
    icon: MyStore,
    to: "/myStore",
  },
  {
    id: "discounts",
    label: "Discounts",
    icon: DiscountIcon,
    to: "/discounts",
  },
];

export const OTHER_LIST = [
  {
    id: "settings",
    label: "Settings",
    icon: Settings,
    to: "/settings",
  },
  {
    id: "getHelp",
    label: "GetHelp",
    icon: GetHelp,
    to: "/getHelp",
  },
];
