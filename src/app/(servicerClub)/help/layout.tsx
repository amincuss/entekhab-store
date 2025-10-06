import Link from "next/link";
import React from "react";
import { IoMdArrowRoundForward } from "react-icons/io";

function HelpLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full w-full flex flex-col bg-primary">
      <Link href="/profile">
        <div className="px-3 py-2 flex gap-2 items-center text-white">
          <IoMdArrowRoundForward size={20} />
          <h1 className="text-sm font-bold ">راهنما</h1>
        </div>
      </Link>
      <div className="flex-1 bg-white rounded-t-2xl overflow-hidden mt-2 pt-2">
        {children}
      </div>
    </div>
  );
}
export default HelpLayout;
