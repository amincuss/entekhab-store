"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import CartItemContent from "./CartItemContent";
import { TProduct } from "../../type";

interface CartItemProps {
  product: TProduct;
  mainPage?: boolean;
}

export default function CartItem({ product, mainPage = false }: CartItemProps) {
  const pathname = usePathname();
  const userScore = useSelector((state: RootState) => state.user.UserScore) ?? 0;
  const percentage =
    userScore >= product.Price
      ? 100
      : Math.max(1, Math.round((userScore / product.Price) * 100));
  const inCategoryPage = pathname
    .split("/")
    .some((p) => p === String(product.Category));
  const href = inCategoryPage
    ? `${pathname}/${product.Id}`
    : `${pathname}/${product.Category}/${product.Id}`;

  if (!product.Status) {
    return (
      <div className="cursor-not-allowed select-none flex-[0_0_45%]">
        <CartItemContent
          product={product}
          percentage={percentage}
          mainPage={mainPage}
        />
      </div>
    );
  }

  return (
    <Link href={href} className="flex-[0_0_45%]">
      <CartItemContent
        product={product}
        percentage={percentage}
        mainPage={mainPage}
      />
    </Link>
  );
}
