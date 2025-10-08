"use client";
import { RootState } from "@/store/store";
import { Avatar, TextField } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import jalaliday from "jalaliday";
import Profile from "./Profile";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

dayjs.extend(jalaliday);

function UserAccount() {
  const user = useSelector((state: RootState) => state.user);
  const persianDate = dayjs(user.BirthDate)
    .calendar("jalali")
    .locale("fa")
    .format("YYYY/MM/DD");
  return (
    <div className="flex flex-col flex-1 gap-3 h-full bg-gray-100 rounded-t-2xl overflow-hidden">
      <div className=" p-3 flex flex-col items-center gap-3 bg-white">
        <Avatar
          alt={user.Name + " " + user.Family}
          src="/images/avatar.jpg"
          sx={{ width: 70, height: 70 }}
        />
        <div className="flex flex-col flex-1">
          <span className="font-bold text-lg">
            {user.Name} {user.Family}
          </span>
          <span className="text-sm text-gray-500">
            کد تکنسین: {user.AgentCode}
          </span>
        </div>
      </div>
      <div className=" flex-1 overflow-auto px-3 py-4 flex flex-col gap-3 bg-white">
        <div className="flex gap-5 flex-col">
          <TextField
            disabled
            label="شماره همراه"
            value={user.MobilePhone || ""}
          />
          <TextField disabled label="کد ملی" value={user.NationalCode || ""} />
          <TextField disabled label="تاریخ تولد" value={persianDate} />
        </div>
      </div>
    </div>
  );
}

export default UserAccount;
