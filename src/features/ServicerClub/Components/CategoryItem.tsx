"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TCategory } from "../type";

interface CategoryItemProps {
  category: TCategory;
  size?: number; // اندازه دلخواه برای کامپوننت
}

const CategoryItem: React.FC<CategoryItemProps> = ({ category, size = 80 }) => {
  const pathname = usePathname();

  return (
    <Link
      href={`${pathname}/${category.Id}`}
      key={category.Id}
      className="group"
    >
      <div className="flex flex-col items-center justify-center">
        <div
          className="overflow-hidden rounded-lg "
          style={{ width: size, height: size }}
        >
          <Image
            src={category.Image || "/images/default-category.png"} // fallback image
            alt={category.Title}
            width={size}
            height={size}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            priority
          />
        </div>

        {/* عنوان دسته */}
        <span className="text-[10px] text-gray-700 mt-2 font-bold text-center">
          {category.Title}
        </span>
      </div>
    </Link>
  );
};

export default CategoryItem;
