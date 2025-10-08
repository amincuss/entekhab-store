"use client";
import { RootState } from "@/store/store";
import Link from "next/link";
import { JSX } from "react";
import { CgShoppingBag, CgSync } from "react-icons/cg";
import { FiShoppingCart, FiTrash } from "react-icons/fi";
import { IoIosArrowBack, IoIosClose } from "react-icons/io";
import { PiShoppingBagOpen, PiTruck } from "react-icons/pi";
import { useSelector } from "react-redux";

function MyOrdersWidget() {
  const statuses = useSelector((state: RootState) => state.orders.Statuses);
  const orders = useSelector((state: RootState) => state.orders.Orders);

  const statusConfig: Record<number, { icon: JSX.Element; color: string }> = {
    1: { icon: <FiTrash size={15} />, color: "bg-orange-100 text-orange-600" },
    2: { icon: <CgSync size={18} />, color: "bg-cyan-100 text-cyan-600" },
    3: {
      icon: <FiShoppingCart size={15} />,
      color: "bg-purple-100 text-purple-600",
    },

    6: {
      icon: <PiTruck size={18} />,
      color: "bg-green-100 text-green-600",
    },

    12: { icon: <IoIosClose size={20} />, color: "bg-red-100 text-red-600" },
  };

  const groupedOrders = statuses.map((status) => {
    const count = orders.filter((o) => o.Status === status.Id).length;
    return { ...status, count };
  });

  return (
    <div className="py-3 px-2 bg-white">
      <div className="flex justify-between text-xs pb-2">
        <span className="font-medium">سفارش‌های من</span>
        <div className="flex gap-1 items-center text-gray-600 text-[10px] cursor-pointer">
          <Link href={"/profile/orders"}>
            <span>مشاهده همه</span>
          </Link>
          <IoIosArrowBack size={10} />
        </div>
      </div>

      <div className="flex gap-3 overflow-x-auto py-3">
        {groupedOrders.map((item, index) => {
          const config = statusConfig[item.Id] || {
            icon: <CgShoppingBag />,
            color: "text-gray-400",
          };

          return (
            <Link
              href={`/profile/orders?tab=${item.Id} `}
              className="flex items-center"
              key={item.Id}
            >
              <div className="flex flex-col items-center w-fit justify-center px-2 py-2 text-xs">
                <div className="relative">
                  <PiShoppingBagOpen size={35} className="text-gray-400" />
                  <span
                    className={`${config.color} absolute -bottom-2.5 -right-3.5 w-7 h-7 rounded-full flex justify-center items-center p-0.5 border-2 border-white`}
                  >
                    {config.icon}
                  </span>
                </div>
                <div className="font-medium text-nowrap mt-3 text-[10px] text-gray-600">
                  {item.Title}({item.count})
                </div>
              </div>
              {index < groupedOrders.length - 1 && (
                <span className="w-0.5 h-8/12 bg-gray-50"></span>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default MyOrdersWidget;
