"use client";

import Image from "next/image";

export default function GlobalLoading() {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-background-light dark:bg-background-dark">
      <div className="relative w-24 h-24 flex items-center justify-center">
        {/* حلقه چرخان */}
        <div className="absolute inset-0 rounded-full border-2 border-primary border-t-secondary animate-spin"></div>

        {/* لوگو */}
        <div className="relative w-full h-full p-2">
          <Image
            src="/images/logo.png"
            alt="Loading"
            fill
            className="rounded-full object-cover"
            priority
            sizes="96px" // اندازه دقیق container
          />
        </div>
      </div>
    </div>
  );
}
