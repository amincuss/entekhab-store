"use client";

import { RootState } from "@/store/store";
import { Badge, BottomNavigation, BottomNavigationAction } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaHistory } from "react-icons/fa";
import { FaUserLarge } from "react-icons/fa6";
import { IoStorefront } from "react-icons/io5";
import { useSelector } from "react-redux";

export default function BottomNav() {
  const router = useRouter();
  const pathname = usePathname();
  const [value, setValue] = useState(1); // پیش‌فرض Store

  const CurrentScoreRedux = useSelector(
    (state: RootState) => state.auth.currentScore
  );
  useEffect(() => {
    if (pathname.includes("profile")) setValue(0);
    else if (pathname.includes("store") || pathname === "/") setValue(1);
    else if (pathname.includes("history")) setValue(2);
  }, [pathname, CurrentScoreRedux]);

  return (
    <div className="h-auto w-full bg-white shadow-lg z-10 border-t border-gray-200">
      <BottomNavigation
        showLabels
        value={value}
        onChange={(e, newValue) => setValue(newValue)}
      >
        <BottomNavigationAction
          label="پروفایل"
          icon={
            <Badge
              badgeContent={
                <span className="flex items-center gap-1">
                  {CurrentScoreRedux} <span className="text-[10px]">سکه</span>
                </span>
              }
              color="error"
            >
              <FaUserLarge size={22} className="mb-0.5" />
            </Badge>
          }
          onClick={() => router.push("/profile")}
        />
        <BottomNavigationAction
          label="فروشگاه"
          icon={<IoStorefront size={22} className="mb-0.5" />}
          onClick={() => router.push("/store")}
        />
        <BottomNavigationAction
          label="تاریخچه"
          icon={<FaHistory size={22} className="mb-0.5" />}
          onClick={() => router.push("/history")}
        />
      </BottomNavigation>
    </div>
  );
}
