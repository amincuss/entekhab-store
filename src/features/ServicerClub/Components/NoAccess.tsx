import Image from "next/image";
import React from "react";

function NoAccess() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center text-gray-500">
      
      <Image
        src="/images/Empty_icon.png"
        alt="empty"
        className="opacity-40"
        width="100"
        height="100"
        priority
      />
      <p className="mt-2 text-sm text-gray-400 text-center">
        هویت شما تایید نشد و دسترسی لازم برای مشاهده این صفحه را ندارید
      </p>
    </div>
  );
}

export default NoAccess;
