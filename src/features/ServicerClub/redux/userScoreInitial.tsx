"use client";

import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setUserScore } from "./userSlice";
import { useGetScoreList } from "../hooks/useGetScoreList";

// interface UserScoreInitializerProps {
//   // you can remove page because infinite query handles it internally
// }

export function UserInitializer({}) {
  const dispatch = useDispatch();
  const agencyCode = useSelector((state: RootState) => state.auth.agencyCode);

  const { data, isSuccess } = useGetScoreList(agencyCode as string, {
    enabled: !!agencyCode,
  });

  useEffect(() => {
    if (isSuccess && data?.pages?.[0]?.ScoreList?.length) {
      // get the first item of the first page
      dispatch(setUserScore(data.pages[0].ScoreList[0].Count));
    }
  }, [isSuccess, data, dispatch]);

  return null;
}
