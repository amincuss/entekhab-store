"use client";

import { useGetServicerCurrentScore } from "@/features/ServicerClub/hooks/useGetServicerCurrentScore";
import { setAgencyCode, setCurrentScore } from "@/store/slices/authSlice";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Loading from "../loading";
import { useGetProductList } from "@/features/ServicerClub/hooks/useGetProductList";
import { setData } from "@/features/ServicerClub/redux/rewardsSlice";

interface StoreInitializerProp {
  children: React.ReactNode;
  agencyCode: string;
}
function StoreInitializer({ children, agencyCode }: StoreInitializerProp) {
  const dispatch = useDispatch();
  useEffect(() => {
    if (agencyCode) {
      dispatch(setAgencyCode(agencyCode));
    }
  }, [agencyCode, dispatch]);

  const {
    data: productData,
    isLoading: isLoadingProduct,
    isSuccess: isSuccessProduct,
  } = useGetProductList({
    enabled: true,
  });

  const {
    data: CurrentScore,
    isLoading: isLoadingCurrentScore,
    isSuccess: isSuccessCurrentScore,
  } = useGetServicerCurrentScore(agencyCode!);

  // ذخیره داده‌ها در ریداکس
  useEffect(() => {
    if (productData) dispatch(setData(productData.Data));
  }, [isSuccessProduct, productData, dispatch]);

  useEffect(() => {
    if (isSuccessCurrentScore && CurrentScore && CurrentScore?.IsSuccess) {
      dispatch(setCurrentScore(CurrentScore?.Data.Score));
    }
  }, [isSuccessCurrentScore, CurrentScore, dispatch]);

  if (isLoadingCurrentScore || isLoadingProduct) return <Loading />;

  return <>{children}</>;
}

export default StoreInitializer;
