import Link from "next/link";
import React from "react";
import { BiSupport } from "react-icons/bi";

function ProfileLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full w-full flex flex-col bg-primary">
      <div className="px-3 py-2 flex justify-between items-center text-white">
        <h1 className="text-sm font-bold ">پروفایل</h1>
        <Link href="/help" className="flex items-center gap-1">
          <span className="text-sm">راهنما</span>
          <BiSupport size={22} />
        </Link>
      </div>

      {/* ایجاد فاصله از بالا تا انحنا قابل‌مشاهده بشه */}
      <div className="flex-1 bg-white rounded-t-2xl overflow-hidden mt-2">
        {children}
      </div>
    </div>
  );
}
export default ProfileLayout;
