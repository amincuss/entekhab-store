import React from "react";

function HistoryLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full w-full flex flex-col bg-primary">
        <div className="px-3 py-2 flex gap-2 items-center text-white">
          <h1 className="text-sm font-bold ">تاریخچه سکه ها</h1>
        </div>
      <div className="flex-1 bg-white rounded-t-2xl overflow-hidden mt-2">
        {children}
      </div>
    </div>
  );
}
export default HistoryLayout;
