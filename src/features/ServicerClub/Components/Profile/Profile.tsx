"use client";

import { RootState } from "@/store/store";
import { Avatar } from "@mui/material";
import dayjs from "dayjs";
import jalaliday from "jalaliday";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import { useSelector } from "react-redux";
dayjs.extend(jalaliday);

function Profile() {
  const user = useSelector((state: RootState) => state.user);
  return (
    <Link href={"/profile/account"}>
      <div className=" p-3 flex items-center gap-3 bg-white">
        <Avatar
          alt={user.Name + " " + user.Family}
          src="/images/avatar.jpg"
          sx={{ width: 60, height: 60 }}
        />
        <div className="flex flex-col flex-1">
          <span className="font-bold text-lg">
            {user.Name} {user.Family}
          </span>
          <span className="text-sm text-gray-500">
            کد تکنسین: {user.AgentCode}
          </span>
        </div>
        <div className="text-center">
          <IoIosArrowBack size={20} />
        </div>
      </div>
    </Link>
  );
}

export default Profile;
