import { axiosInstance } from "@/lib/axiosInstance";
import { ApiResponse } from "@/shared/types/api";
import {
  SliderItem,
  SubmitOrderPayload,
  TGetScoreList,
  TGetServicerCurrentScore,
  TGetServicerOrders,
  TProductList,
} from "../type";

//دریافت امتیاز کاربر
export const getServicerCurrentScore = (agencyCode: string) => {
  return axiosInstance
    .get<ApiResponse<TGetServicerCurrentScore>>("/GetServicerCurrentScore", {
      params: { agencyCode },
    })
    .then((res) => {
      if (!res.data.IsSuccess)
        throw new Error(res.data.Message || "خطای ناشناخته");
      return res.data;
    });
};

//دریافت بنر های اسلایدر عکس
export const getServicersClubSlides = () => {
  return axiosInstance
    .get<ApiResponse<SliderItem[]>>("/GetServicersClubSlides")
    .then((res) => {
      if (!res.data.IsSuccess)
        throw new Error(res.data.Message || "خطای اسلایدر بنر فروشگاه");
      return res.data;
    });
};

//دریافت تاریخچه امتیاز ها
export const getScoreList = async (
  agencyCode: string,
  page: number
): Promise<TGetScoreList> => {
  const res = await axiosInstance.get<ApiResponse<TGetScoreList>>(
    "/GetScoreList",
    {
      params: { agencyCode, page },
    }
  );

  if (!res.data.IsSuccess) {
    throw new Error(res.data.Message || "خطای ناشناخته");
  }

  return res.data.Data;
};


//دریافت لیست دسته بندی ها و محصولات
export const getProductList = () => {
  return axiosInstance
    .get<ApiResponse<TProductList>>("/ProductList")
    .then((res) => {
      if (!res.data.IsSuccess) {
        throw new Error(res.data.Message || "خطای ناشناخته");
      }
      return res.data; // فقط Data برگرده
    });
};

export const submitOrder = async (payload: SubmitOrderPayload) => {
  const { data } = await axiosInstance.post<ApiResponse<SubmitOrderPayload>>(
    "/SubmitOrder",
    {},
    { params: payload }
  );
  return data;
};

//دریافت وضعیت سفارش ها
export const getServicerOrders = (agencyCode: string) => {
  return axiosInstance
    .get<ApiResponse<TGetServicerOrders>>("/GetServicerOrders", {
      params: { agencyCode },
    })
    .then((res) => {
      if (!res.data.IsSuccess) {
        throw new Error(res.data.Message || "خطای ناشناخته");
      }
      return res.data;
    });
};
