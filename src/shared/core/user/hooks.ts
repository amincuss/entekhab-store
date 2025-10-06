import { useApiQuery } from "@/lib/useApiQuery";
import { ApiResponse } from "@/shared/types/api";
import { UserData } from "./types";
import { getServicerData } from "./api";
import { globalShowSnackbar } from "@/providers/SnackbarProvider";

interface UseGetServicerDataOptions {
  enabled?: boolean;
}

export const useGetServicerData = (
  agencyCode: string,
  options?: UseGetServicerDataOptions
) => {
  return useApiQuery<ApiResponse<UserData>>(
    ["servicerData", agencyCode],
    async () => {
      const res = await getServicerData(agencyCode);

      if (!res.IsSuccess) {
        globalShowSnackbar?.(res.Message, "error");
      }

      return res;
    },
    {
      ...options, // اینجا enabled و سایر گزینه‌ها اعمال می‌شوند
    }
  );
};
