"use client";

import { useGetServicerData } from "@/shared/core/user/hooks";
import { AppDispatch, RootState } from "@/store/store";
import { Avatar, TextField } from "@mui/material";
import React, {useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/userSlice";
import NotFound from "@/app/not-found";
import Loading from "@/app/loading";
import dayjs from "dayjs";
import jalaliday from "jalaliday";
import Empty from "@/components/Empty";
dayjs.extend(jalaliday);

function Profile() {
  const dispatch = useDispatch<AppDispatch>();
  const agencyCode = useSelector((state: RootState) => state.auth.agencyCode);
 const {
   data: userData,
   isLoading,
   isSuccess,
 } = useGetServicerData( agencyCode ?? "",{ enabled: !!agencyCode });





  // ذخیره داده در ریداکس
  useEffect(() => {
    if (isSuccess && userData?.IsSuccess && userData.Data) {
      dispatch(setUser(userData.Data));
    }
  }, [isSuccess, userData, dispatch]);

  const user = useSelector((state: RootState) => state.user);
 if (!agencyCode) return <NotFound />;
  if (!userData?.IsSuccess || !userData.Data) return <Empty message="کاربری یافت نشد" />;
  if (isLoading) return <Loading />;

  const persianDate = dayjs(user.BirthDate)
    .calendar("jalali")
    .locale("fa")
    .format("YYYY/MM/DD");

  return (
    <div className="flex flex-col flex-1 gap-3 h-full bg-gray-100 rounded-t-2xl overflow-hidden">
      <div className=" p-3 flex items-center gap-3 bg-white">
        <Avatar
          alt={user.Name + " " + user.Family}
          src="/images/avatar.jpg"
          sx={{ width: 60, height: 60 }}
        />
        <div className="flex flex-col">
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

export default Profile;
