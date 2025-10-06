"use client";

import Empty from "@/components/Empty";
import { setAgencyCode } from "@/store/slices/authSlice";
import { AppDispatch, RootState } from "@/store/store";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetServicerCurrentScore } from "../hooks/useGetServicerCurrentScore";
import { useGetServicersClubSlides } from "../hooks/useGetServicersClubSlides";
import { setUserScore } from "../redux/userSlice";
import { TCategory, TProduct } from "../type";
import CategoryPreviewList from "./CategoryPreviewList";
import StoreHeader from "./StoreHeader";
import StoreSlider from "./StoreSlider";

export default function StoreView() {
  const dispatch = useDispatch<AppDispatch>();
  const agencyCode = useSelector((state: RootState) => state.auth.agencyCode);

  useEffect(() => {
    if (agencyCode) {
      dispatch(setAgencyCode(agencyCode));
    }
  }, [agencyCode, dispatch]);

  // const { data: productData, isLoading } = useGetProductList({ enabled: true });
  const { data: sliders, isSuccess: isSlidesSuccess } =
    useGetServicersClubSlides({ enabled: true });

  const { data: CurrentScore, isSuccess: isSuccessCurrentScore } =
    useGetServicerCurrentScore(agencyCode!);

  // // ذخیره داده در ریداکس
  // useEffect(() => {
  //   if (productData) dispatch(setData(productData.Data));
  // }, [productData, dispatch]);
  const Products = useSelector((state: RootState) => state.rewards.Products);
  const Categories = useSelector(
    (state: RootState) => state.rewards.Categories
  );
  useEffect(() => {
    if (
      isSuccessCurrentScore &&
      CurrentScore?.IsSuccess &&
      CurrentScore.Data.Score
    ) {
      dispatch(setUserScore(CurrentScore.Data.Score));
    }
  }, [isSuccessCurrentScore, CurrentScore, dispatch, agencyCode]);

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
