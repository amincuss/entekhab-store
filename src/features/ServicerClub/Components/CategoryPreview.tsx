"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import CartItem from "./Peroduct/CartItem";
import { TCategory, TProduct } from "../type";

interface CategoryPreviewProps {
  category: TCategory;
  products: TProduct[];
}

function CategoryPreview({ category, products }: CategoryPreviewProps) {
  const pathname = usePathname();

  // فیلتر محصولات فعال
  const activeProducts = products.filter((product) => product.Status !== false);

  let productsToShow: TProduct[];

  if (activeProducts.length > 0) {
    // اگر محصول فعال داریم، آخرین ۵ محصول فعال
    productsToShow = activeProducts.slice(-5);
  } else {
    // در غیر این صورت، آخرین ۵ محصول هر محصولی
    productsToShow = products.slice(-5);
  }

  if (productsToShow.length === 0) return null;

  return (
    <div className="w-full mb-4">
      <div className="bg-secondary text-white px-2 pt-3 pb-5 w-full shadow-md flex justify-between items-center">
        <h6 className="text-xs font-semibold">{category.Title}</h6>
        <Link href={`${pathname.replace(/\/$/, "")}/${category.Id}`}>
          <span className="text-[10px] flex items-center gap-1 cursor-pointer">
            مشاهده همه <FaArrowLeft />
          </span>
        </Link>
      </div>
      <div className="px-2 pb-2 -mt-2 flex gap-3 overflow-x-auto scrollbar-hide w-full">
        {productsToShow.map((product) => (
          <CartItem key={product.Id} product={product} mainPage={true} />
        ))}
      </div>
    </div>
  );
}

export default CategoryPreview;
