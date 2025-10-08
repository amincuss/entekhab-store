import SearchBar from "@/features/ServicerClub/Components/SearchBar";
import React from "react";

function LayoutStore({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full flex flex-col ">
      <div className="flex justify-between items-center p-2  gap-2">
        <SearchBar />
      </div>
      <div className="flex-1 overflow-auto">{children}</div>
    </div>
  );
}

export default LayoutStore;
