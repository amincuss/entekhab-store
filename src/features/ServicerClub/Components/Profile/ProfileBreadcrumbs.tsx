"use client";
import React from "react";
import { profilePages } from "./profileRoutes";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";
import { FaArrowRightLong } from "react-icons/fa6";

function ProfileHeader() {
  const pathname = usePathname();

  const currentPage =
    profilePages.find((p) => pathname.endsWith(p.path)) ?? profilePages[0];

  const isRoot = pathname === "/profile";

  return (
    <div className="flex items-center justify-between bg-primary text-white py-2 rounded-t-lg">
      {!isRoot ? (
        <Link
          className="flex items-center gap-2"
          href={currentPage.parent || "/profile"}
        >
          <FaArrowRightLong size={12} />
          <span className="text-sm font-bold">{currentPage.title}</span>
        </Link>
      ) : (
        <span className="text-sm font-bold">{currentPage.title}</span>
      )}
    </div>
  );
}

export default ProfileHeader;
