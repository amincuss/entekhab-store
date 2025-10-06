"use client";

import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setUserScore } from "./userSlice";
import { useGetScoreList } from "../hooks/useGetScoreList";

interface UserScoreInitializerProps {
  page?: number;
}

export function UserInitializer({ page = 1 }: UserScoreInitializerProps) {
  const dispatch = useDispatch();
  const initialAgencyCode = useSelector(
    (state: RootState) => state.auth.agencyCode
  );
  const agencyCode = useSelector((state: RootState) => state.auth.agencyCode);

  const { data, isSuccess } = useGetScoreList(page, agencyCode as string, {
    enabled: !!initialAgencyCode,
  });

  useEffect(() => {
    if (isSuccess && data?.ScoreList?.length != null) {
      dispatch(setUserScore(data.ScoreList[0].Count));
    }
  }, [isSuccess, data, dispatch]);

  return null;
}
