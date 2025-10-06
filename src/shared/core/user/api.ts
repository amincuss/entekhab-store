// features/user/api.ts
import { axiosInstance } from "@/lib/axiosInstance";
import { ApiResponse } from "@/shared/types/api";
import { UserData } from "./types";

export const getServicerData = (agencyCode: string) => {
  return axiosInstance
    .get<ApiResponse<UserData>>("/GetServicerData", { params: { agencyCode } })
    .then((res) => res.data); // فقط داده را برگردان، throw نکن
};