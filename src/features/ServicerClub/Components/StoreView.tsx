"use client";

import Empty from "@/components/Empty";
import { RootState } from "@/store/store";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useGetServicersClubSlides } from "../hooks/useGetServicersClubSlides";
import { TCategory, TProduct } from "../type";
import CategoryPreviewList from "./CategoryPreviewList";
import StoreHeader from "./StoreHeader";
import StoreSlider from "./StoreSlider";

export default function StoreView() {
  const { data: sliders, isSuccess: isSlidesSuccess } =
    useGetServicersClubSlides({ enabled: true });

  const Products = useSelector((state: RootState) => state.rewards.Products);
  const Categories = useSelector(
    (state: RootState) => state.rewards.Categories
  );

  const categoriesWithProducts = useMemo(() => {
    if (!Categories) return [];
    return Categories.filter((category: TCategory) =>
      Products.some((p: TProduct) => p.Category === category.Id)
    );
  }, [Categories, Products]);

  if (!Categories || Products.length === 0)
    return <Empty message="محصولی یافت نشد" />;

  return (
    <div className="flex flex-col h-full ">
      <StoreHeader categories={categoriesWithProducts} />
      <div className="pt-1 flex-1 overflow-auto">
        {isSlidesSuccess && sliders?.Data?.length > 0 && (
          <StoreSlider slides={sliders.Data} />
        )}
        <CategoryPreviewList
          categories={categoriesWithProducts}
          products={Products}
        />
      </div>
    </div>
  );
}
