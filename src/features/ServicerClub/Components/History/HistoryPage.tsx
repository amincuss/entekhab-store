"use client";

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useGetScoreList } from "../../hooks/useGetScoreList";
import HistoryList from "./HistoryList";
import LoadMoreButton from "./LoadMoreButton";
import { ScoreItem } from "../../type";
import FilterButton from "./FilterButton";
import Empty from "@/components/Empty";
import Loading from "@/app/loading";

export type FilterType = "all" | "buy" | "receive";

export default function HistoryPage() {
  const agencyCode = useSelector((state: RootState) => state.auth.agencyCode);
  const [page, setPage] = useState(1);
  const [allScores, setAllScores] = useState<ScoreItem[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [filter, setFilter] = useState<FilterType>("all");

  const { data, isLoading, isFetching } = useGetScoreList(page, agencyCode!, {
    enabled: !!agencyCode,
  });
  useEffect(() => {
    if (data?.ScoreList) {
      setAllScores((prev) => [...prev, ...data.ScoreList]);
      if (data.ScoreList.length === 0) setHasMore(false);
    }
  }, [data]);

  const loadMore = () => {
    if (hasMore) setPage((prev) => prev + 1);
  };
  // فیلتر کردن امتیازها
  const filteredScores = allScores.filter((score: ScoreItem) => {
    if (filter === "all") return true;
    if (filter === "buy") return score.ScoreType === 2;
    if (filter === "receive") return score.ScoreType === 1;
  });
  return (
    <>
      {allScores ? (
        <div className="h-full w-full flex flex-col px-2 py-3">
          <FilterButton setFilter={setFilter} filter={filter} />
          <HistoryList scores={filteredScores} />
          {(hasMore || isLoading || isFetching) && (
            <LoadMoreButton
              onClick={loadMore}
              isLoading={isFetching || isLoading}
            />
          )}
        </div>
      ) : !allScores ? (
        <div className="h-full">
          <Empty message="تاریخچه ای موجود نیست" />
        </div>
      ) : isLoading ? (
        <Loading />
      ) : null}
    </>
  );
}
