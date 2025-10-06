"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ForceBackToStore() {
  const router = useRouter();

  useEffect(() => {
    const handlePopState = () => {
      router.replace("/store"); // مهم: جایگزین می‌کند نه اینکه استک اضافه کند
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [router]);

  return null;
}
