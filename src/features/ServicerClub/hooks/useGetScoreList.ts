// import { getScoreList } from "../api/api";
// import { TGetScoreList } from "../type";
// import { useInfiniteQuery } from "@tanstack/react-query";

// export const useGetScoreList = (
//   agencyCode: string,
//   options?: { enabled?: boolean }
// ) => {
//   return useInfiniteQuery<TGetScoreList, Error>({
//     queryKey: ["GetScoreList", agencyCode],
//     queryFn: async (context) => {
//       const page =
//         typeof context.pageParam === "number" ? context.pageParam : 1;
//       return await getScoreList(agencyCode, page);
//     },

//     getNextPageParam: (lastPage, allPages) =>
//       lastPage.ScoreList.length > 0 ? allPages.length + 1 : undefined,
//     initialPageParam: 1,
//     enabled: !!agencyCode && (options?.enabled ?? true),
//   });
// };
import { useInfiniteQuery } from "@tanstack/react-query";
import { TGetScoreList } from "../type";
import { getScoreList } from "../api/api";

export const useGetScoreList = (
  agencyCode: string,
  options?: { enabled?: boolean }
) => {
  return useInfiniteQuery<TGetScoreList, Error>({
    queryKey: ["GetScoreList", agencyCode],
    queryFn: async ({ pageParam = 1 }) => {
      const page = typeof pageParam === "number" ? pageParam : 1;
      return await getScoreList(agencyCode, page);
    },
    getNextPageParam: (lastPage, allPages) =>
      lastPage.ScoreList.length > 0 ? allPages.length + 1 : undefined,
    initialPageParam: 1,
    enabled: !!agencyCode && (options?.enabled ?? true),
  });
};
