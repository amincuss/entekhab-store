import { axiosInstance } from "@/lib/axiosInstance";
import { ApiResponse } from "@/shared/types/api";
import { SliderItem, SubmitOrderPayload, TGetScoreList, TGetServicerCurrentScore, TProductList } from "../type";


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
export const getScoreList = (agencyCode: string, page: number) => {
  return axiosInstance
    .get<ApiResponse<TGetScoreList>>("/GetScoreList", {
      params: { agencyCode, page },
    })
    .then((res) => {
      if (!res.data.IsSuccess) {
        throw new Error(res.data.Message || "خطای ناشناخته");
      }
      return res.data.Data; // فقط Data برگرده
    });
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
