import React from "react";
import { FilterType } from "./HistoryPage";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { GiReceiveMoney } from "react-icons/gi";
import { HiShoppingBag } from "react-icons/hi2";
import { BsClockHistory } from "react-icons/bs";

interface FilterButtonProps {
  filter: FilterType;
  setFilter: React.Dispatch<React.SetStateAction<FilterType>>;
}
function FilterButton({ setFilter, filter }: FilterButtonProps) {
  const handleChange = (event: React.SyntheticEvent, newValue: FilterType) => {
    setFilter(newValue);
  };
  return (
    <BottomNavigation
      value={filter}
      onChange={handleChange}
      className="w-full !min-h-fit !h-fit !bg-gray-100 !rounded-md mb-2 p-2"
      showLabels
    >
      <BottomNavigationAction
        label="همه"
        value="all"
        icon={<BsClockHistory size={25} className="text-secondary mb-2" />}
        className={`${
          filter === "all" ? "!bg-white !text-black" : "bg-transparent"
        } !rounded-md !min-h-fit !p-2`}
      />
      <BottomNavigationAction
        label="خرید"
        value="buy"
        icon={<HiShoppingBag size={25} className="text-red-600 mb-2" />}
        className={`${
          filter === "buy" ? "!bg-white !text-black" : "bg-transparent"
        } !rounded-md !min-h-fit !p-2 `}
      />
      <BottomNavigationAction
        label="دریافت"
        value="receive"
        icon={<GiReceiveMoney size={25} className="text-green-600 mb-2" />}
        className={`${
          filter === "receive" ? "!bg-white !text-black" : "bg-transparent"
        } !rounded-md !min-h-fit !p-2`}
      />
    </BottomNavigation>
  );
}

export default FilterButton;
