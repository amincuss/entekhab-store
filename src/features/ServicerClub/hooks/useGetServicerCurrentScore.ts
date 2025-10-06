import { useApiQuery } from "@/lib/useApiQuery";
import { ApiResponse } from "@/shared/types/api";
import { getServicerCurrentScore } from "../api/api";
import { TGetServicerCurrentScore } from "../type";

export const useGetServicerCurrentScore = (
  agencyCode: string,
  options?: { enabled?: boolean }
) => {
  return useApiQuery<ApiResponse<TGetServicerCurrentScore>>(
    ["GetServicerCurrentScore", agencyCode],
    () => getServicerCurrentScore(agencyCode),
    {
      ...options, // 👈 اینجا اضافه کن
    }
  );
};
