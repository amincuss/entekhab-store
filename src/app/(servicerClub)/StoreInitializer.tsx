"use client";

import { useGetServicerCurrentScore } from "@/features/ServicerClub/hooks/useGetServicerCurrentScore";
import { setAgencyCode, setCurrentScore } from "@/store/slices/authSlice";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Loading from "../loading";
import { useGetProductList } from "@/features/ServicerClub/hooks/useGetProductList";
import { setData } from "@/features/ServicerClub/redux/rewardsSlice";
import { useGetServicerData } from "@/shared/core/user/hooks";
import { setUser } from "@/features/ServicerClub/redux/userSlice";
import { useGetServicerOrders } from "@/features/ServicerClub/hooks/useGetServicerOrders";
import { setOrder } from "@/features/ServicerClub/redux/orderSlice";

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

  const { data: userData, isSuccess } = useGetServicerData(agencyCode ?? "", {
    enabled: !!agencyCode,
  });

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

  const { data: orderData, isSuccess: isSuccessOrder } = useGetServicerOrders(
    agencyCode,
    {
      enabled: !!agencyCode,
    }
  );

  // ذخیره داده‌ها در ریداکس
  useEffect(() => {
    if (productData) dispatch(setData(productData.Data));
  }, [isSuccessProduct, productData, dispatch]);

  useEffect(() => {
    if (isSuccessCurrentScore && CurrentScore && CurrentScore?.IsSuccess) {
      dispatch(setCurrentScore(CurrentScore?.Data.Score));
    }
  }, [isSuccessCurrentScore, CurrentScore, dispatch]);

  useEffect(() => {
    if (isSuccess && userData?.IsSuccess && userData.Data) {
      dispatch(setUser(userData.Data));
    }
  }, [isSuccess, userData, dispatch]);

  useEffect(() => {
    if (isSuccessOrder && orderData?.IsSuccess && orderData.Data) {
      dispatch(setOrder(orderData.Data));
    }
  }, [isSuccessOrder, orderData, dispatch]);

  if (isLoadingCurrentScore || isLoadingProduct) return <Loading />;

  return <>{children}</>;
}

export default StoreInitializer;
