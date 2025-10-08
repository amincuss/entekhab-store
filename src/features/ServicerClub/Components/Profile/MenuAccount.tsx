"use client";
import React from "react";
import Link from "next/link";
import { MenuList, TMenuList } from "./profileRoutes";
import { IoIosArrowBack } from "react-icons/io";
import { LuRefreshCw } from "react-icons/lu";

function MenuAccount() {
  return (
    <div className="h-full flex flex-col gap-3 bg-white">
      <div className="flex-1">
        {MenuList.map((item: TMenuList, index: number) => (
          <Link
            key={index}
            href={item.path}
            className="bg-white flex justify-between items-center px-3 py-4 border-b border-gray-100 transition"
          >
            <div className="flex items-center gap-2">
              <span className="text-gray-700">
                <item.icon size={20} />
              </span>
              <span className="text-gray-700 text-sm">{item.title}</span>
            </div>
            <span className="text-gray-700 text-xs">
              <IoIosArrowBack size={20} />
            </span>
          </Link>
        ))}
        <div
          key="refresh"
          className="bg-white flex justify-between items-center px-3 py-4 border-b border-gray-100 transition"
          onClick={() => window.location.reload()}
        >
          <div className="flex items-center gap-2">
            <span className="text-gray-700">
              <LuRefreshCw size={20} />
            </span>
            <span className="text-gray-700 text-sm">بروزرسانی فروشگاه</span>
          </div>
          <span className="text-gray-700 text-xs">
            {/* <IoIosArrowBack size={20} /> */}
          </span>
        </div>
      </div>
    </div>
  );
}

export default MenuAccount;
