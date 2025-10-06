import SearchBar from "@/features/ServicerClub/Components/SearchBar";

import React from "react";

function LayoutStore({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full flex flex-col">
      <div>
        <SearchBar />
      </div>
      <div className="flex-1 overflow-auto">{children}</div>
    </div>
  );
}

export default LayoutStore;
