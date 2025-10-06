import React from "react";
import Image from "next/image";

type EmptyProps = {
  message: string;
  imageSrc?: string;
  size?: number;
};

function Empty({
  message,
  imageSrc = "/images/Empty_icon.png",
  size = 100,
}: EmptyProps) {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center text-gray-500">
      <Image
        src={imageSrc}
        alt="empty"
        className="opacity-40"
        width={size}
        height={size}
        priority
      />
      <p className="mt-2 text-sm text-gray-400 text-center">{message}</p>
    </div>
  );
}

export default Empty;
