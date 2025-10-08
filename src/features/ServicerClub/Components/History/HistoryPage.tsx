"use client";

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import HistoryList from "./HistoryList";
import { ScoreItem } from "../../type";
import FilterButton from "./FilterButton";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "@/components/Loading";
import { useGetScoreList } from "../../hooks/useGetScoreList";

export type FilterType = "all" | "buy" | "receive";

export default function HistoryPage() {
  const agencyCode = useSelector((state: RootState) => state.auth.agencyCode);
  const [filter, setFilter] = useState<FilterType>("all");

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetScoreList(agencyCode!);

  const allScores: ScoreItem[] =
    data?.pages.flatMap((page) => page.ScoreList) ?? [];

  // فیلتر کردن امتیازها
  const filteredScores = allScores.filter((score: ScoreItem) => {
    if (filter === "all") return true;
    if (filter === "buy") return score.ScoreType === 2;
    if (filter === "receive") return score.ScoreType === 1;
  });

  return (
    <div className="w-full flex flex-col px-2 pt-3">
      <FilterButton setFilter={setFilter} filter={filter} />

      <div
        style={{
          height: "calc(100vh - 210px)",
          overflow: "auto",
        }}
        id="scrollableDiv"
      >
        <InfiniteScroll
          dataLength={filteredScores.length}
          next={() => {
            if (hasNextPage && !isFetchingNextPage) {
              fetchNextPage();
            }
          }}
          hasMore={!!hasNextPage && !isFetchingNextPage && !!data}
          loader={
            <div className="flex justify-center items-center py-4 h-16 overflow-hidden">
              <Loading />
            </div>
          }
          scrollThreshold={0.9}
          scrollableTarget="scrollableDiv"
        >
          <HistoryList scores={filteredScores} />
        </InfiniteScroll>
      </div>
    </div>
  );
}
