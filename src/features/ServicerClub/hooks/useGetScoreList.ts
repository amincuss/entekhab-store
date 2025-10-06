import { useApiQuery } from "@/lib/useApiQuery";
import { getScoreList } from "../api/api";
import { TGetScoreList } from "../type";
export const useGetScoreList = (
  page: number,
  agencyCode: string,
  options?: { enabled?: boolean }
) => {
  return useApiQuery<TGetScoreList>( // ← فقط Data
    ["GetScoreList", agencyCode, page.toString()],
    () => getScoreList(agencyCode, page),
    {
      ...options,
    }
  );
};
