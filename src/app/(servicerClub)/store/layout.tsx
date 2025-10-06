import SearchBar from "@/features/ServicerClub/components/SearchBar";
import { UserInitializer } from "@/features/ServicerClub/redux/userScoreInitial";
import React from "react";

function LayoutStore({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full flex flex-col">
      <UserInitializer />
      <div>
        <SearchBar />
      </div>
      <div className="flex-1 overflow-auto">{children}</div>
    </div>
  );
}

export default LayoutStore;
