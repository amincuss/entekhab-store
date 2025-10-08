import { BiSupport } from "react-icons/bi";
import { MdOutlineHistory } from "react-icons/md";
import { PiShoppingBagOpen } from "react-icons/pi";

export interface TProfilePage {
  path: string;
  title: string;
  parent?: string; // برای بازگشت (اختیاری)
}

export interface TMenuList {
  icon: React.ComponentType<{ size?: number }>;
  path: string;
  title: string;
  parent?: string; // برای بازگشت (اختیاری)
}
export const profilePages: TProfilePage[] = [
  { path: "/profile", title: "پروفایل" },
  { path: "/profile/account", title: "حساب کاربری", parent: "/profile" },
  { path: "/profile/help", title: "راهنما", parent: "/profile" },
  {
    path: "/profile/orders",
    title: "سفارش های من",
    parent: "/profile",
  },
  {
    path: "/profile/history",
    title: "تاریخچه سکه ها",
    parent: "/profile",
  },
  { path: "/profile/settings", title: "تنظیمات", parent: "/profile" },
];
export const MenuList: TMenuList[] = [
  {
    path: "/profile/help",
    title: "راهنما",
    parent: "/profile",
    icon: BiSupport,
  },
  {
    path: "/profile/orders",
    title: "سفارش های من",
    parent: "/profile",
    icon: PiShoppingBagOpen,
  },
  {
    path: "/profile/history",
    title: "تاریخچه سکه ها",
    parent: "/profile",
    icon: MdOutlineHistory,
  },
  // {
  //   path: "/profile/help",
  //   title: "علاقه مندی های من",
  //   parent: "/favorites",
  //   icon: GrFavorite,
  // },
];
