import { useApiQuery } from "@/lib/useApiQuery";
import { ApiResponse } from "@/shared/types/api";
import { getServicerOrders } from "../api/api";
import { TGetServicerOrders } from "../type";

export const useGetServicerOrders = (
  agencyCode: string,
  options?: { enabled?: boolean }
) => {
  return useApiQuery<ApiResponse<TGetServicerOrders>>(
    ["GetServicerOrders", agencyCode],
    () => getServicerOrders(agencyCode),
    {
      ...options,
    }
  );
};
