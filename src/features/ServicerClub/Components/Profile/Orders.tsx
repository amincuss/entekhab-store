"use client";
import { useSearchParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { TOrder, TStatus } from "../../type";
import { Tabs, Tab, Box } from "@mui/material";
import { FaTruckFast } from "react-icons/fa6";
import Image from "next/image";
import dayjs from "dayjs";
import jalaliday from "jalaliday";

dayjs.extend(jalaliday);

function Orders() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const statuses = useSelector((state: RootState) => state.orders.Statuses);
  const orders = useSelector((state: RootState) => state.orders.Orders);

  const [value, setValue] = useState<number | null>(null);

  useEffect(() => {
    if (!statuses.length) return;

    const tabFromUrl = searchParams.get("tab");
    if (tabFromUrl) {
      const tabValue = Number(tabFromUrl);
      const valid = statuses.some((s) => s.Id === tabValue);
      setValue(valid ? tabValue : statuses[0].Id);

      router.replace("/profile/orders", { scroll: false });
    } else {
      setValue((prev) => prev ?? statuses[0].Id);
    }
  }, [statuses]);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  if (!statuses.length || value === null) {
    return (
      <div className="text-center flex flex-col gap-3 py-10 text-gray-500 text-sm">
        <FaTruckFast size={30} className="text-gray-400" />
        در حال بارگذاری سفارش‌ها...
      </div>
    );
  }

  const groupedOrders = statuses.map((status: TStatus) => ({
    ...status,
    items: orders.filter((order: TOrder) => order.Status === status.Id),
  }));

  const currentGroup = groupedOrders.find((g) => g.Id === value);

  return (
    <div className="h-full flex flex-col">
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons={false}
        aria-label="order status tabs"
        className="bg-white pt-3"
      >
        {groupedOrders.map((item) => (
          <Tab
            key={item.Id}
            value={item.Id}
            label={`${item.Title} (${item.items.length})`}
            sx={{
              fontSize: "12px",
              minHeight: "40px",
              padding: "6px 12px",
            }}
          />
        ))}
      </Tabs>

      <Box className="mt-2 flex-1 overflow-auto bg-inherit p-2 flex flex-col gap-2">
        {currentGroup && currentGroup.items.length > 0 ? (
          currentGroup.items.map((order, index) => (
            <div
              key={index}
              className="rounded-md shadow-xs bg-white border-gray-300 mb-2 px-3"
            >
              <header className="py-3 border-b border-dotted border-gray-100 font-medium text-gray-500 text-[10px] flex justify-between">
                <span>
                  {dayjs(order.TransactionDate)
                    .calendar("jalali")
                    .locale("fa")
                    .format("dddd DD MMMM YYYY")}
                </span>
                <div className="flex items-center gap-1 text-xs text-primary font-bold">
                  <Image
                    alt="score"
                    src="/images/gold.png"
                    width={15}
                    height={15}
                  />
                  <div className="flex text-center ">
                    {order.Price}
                    <span className="pr-0.5">سکه</span>
                  </div>
                </div>
              </header>
              {order.Description && (
                <main>
                  <span className="text-gray-700 leading-relaxed text-xs py-2 block">
                    {order.Description}
                  </span>
                </main>
              )}
              <footer className="py-3 border-t border-dotted border-gray-100 font-medium text-black text-xs flex items-center justify-between">
                {order.Title}
              </footer>
            </div>
          ))
        ) : (
          <div className="flex flex-col gap-2 justify-center items-center py-10">
            <FaTruckFast size={60} className="text-gray-200" />
            <span className="text-sm text-gray-600">سفارشی ثبت نشده است.</span>
            <span className="text-xs text-gray-400">
              می‌توانید از طریق لیست محصولات، سفارشات خود را ثبت کنید.
            </span>
          </div>
        )}
      </Box>
    </div>
  );
}

export default Orders;
