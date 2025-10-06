"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const CustomBreadcrumbs = () => {
 const pathname = usePathname();
 const segments = pathname.split("/").filter(Boolean);

 const data = useSelector((state: RootState) => state.rewards);

 const categoryId = segments[1];
 const productId = segments[2];

 const categoryItem = data.Categories.find(
  (cat) => String(cat.Id) === categoryId
 );
 const productItem = data.Products.find(
  (prod) => String(prod.Id) === productId
 );

 const breadcrumbs = [
   { name: "فروشگاه", href: `/store` },
   categoryItem
     ? {
         name: categoryItem.Title,
         href: `/store/${categoryItem.Id}`,
       }
     : undefined,
   productItem
     ? {
         name: productItem.Title,
         href: `/store/${categoryId}/${productItem.Id}`,
       }
     : undefined,
 ].filter((item): item is { name: string; href: string } => Boolean(item));

 return (
   <nav className="flex items-center text-sm text-gray-600">
     {breadcrumbs.map((item, idx) => {
       const isLast = idx === breadcrumbs.length - 1;
       return (
         <span
           key={idx}
           className="flex items-center text-xs max-w-[120px] truncate"
         >
           {idx > 0 && <span className="mx-1">/</span>}
           {isLast ? (
             <span className="font-semibold text-gray-900 truncate max-w-[120px]">
               {item.name}
             </span>
           ) : (
             <Link
               href={item.href}
               className="hover:underline truncate max-w-[120px]"
             >
               {item.name}
             </Link>
           )}
         </span>
       );
     })}
   </nav>
 );
};

export default CustomBreadcrumbs;
