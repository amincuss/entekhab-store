import Image from "next/image";
import Badge from "./Badge";
import PriceProgress from "./PriceProgress";
import { TProduct } from "../../type";

type Props = {
  product: TProduct;
  percentage: number;
  mainPage: boolean;
};

export default function CartItemContent({
  product,
  percentage,
  mainPage,
}: Props) {
  return (
    <div
      className={`rounded-xl shadow-md p-2 flex items-center flex-col justify-between ${
        product.Status ? "bg-white h-full" : "bg-gray-100 text-gray-500"
      }`}
    >
      <div className="w-full flex mb-1">
        <Badge mainPage={mainPage} status={product.Status} />
      </div>

      <div className="w-24 h-24 rounded-xl overflow-hidden relative">
        <Image
          src={product.MainImage ?? "/images/logo.png"}
          alt={product.Title}
          fill
          sizes="96px"
          className={`object-cover w-full h-full ${
            !product.MainImage || !product.Status
              ? "filter grayscale opacity-20"
              : ""
          }`}
        />
      </div>

      <span
        className={`text-[10px] mt-2 font-semibold text-center ${
          product.Status ? "text-black" : "text-gray-400"
        }`}
      >
        {product.Title}
      </span>

      <PriceProgress
        price={product.Price}
        percentage={percentage}
        status={product.Status}
      />
    </div>
  );
}
