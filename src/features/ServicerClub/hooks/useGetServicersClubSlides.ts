import { useApiQuery } from "@/lib/useApiQuery";
import { ApiResponse } from "@/shared/types/api";
import { getServicersClubSlides } from "../api/api";
import { SliderItem } from "../type";

export const useGetServicersClubSlides = (options?: { enabled?: boolean }) => {
  return useApiQuery<ApiResponse<SliderItem[]>>(
    ["GetServicersClubSlides"],
    () => getServicersClubSlides(),
    {
      ...options, // 👈 اینجا اضافه کن
    }
  );
};
