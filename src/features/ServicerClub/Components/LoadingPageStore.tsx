"use client";
import React from "react";
import { Skeleton, Box, Avatar, Typography } from "@mui/material";

function LoadingPageStore() {
  return (
    <div className="h-full w-full flex flex-col p-3">
      <div className="w-full h-52 flex gap-3">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Box
            key={idx}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Skeleton height={50} width={50} variant="circular">
              <Avatar />
            </Skeleton>
            <Skeleton width="100%">
              <Typography>.</Typography>
            </Skeleton>
          </Box>
        ))}
      </div>
      <div className="w-full my-4">
        <Skeleton height={120} variant="rounded"></Skeleton>
      </div>
      {/* کارت‌های محصول */}
      <div className="w-full mb-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <div
            className="w-full mb-4 flex flex-col gap-2 rounded-2xl border border-gray-100 p-4 shadow"
            key={idx}
          >
            <Skeleton variant="rounded" width="100%" height={118} />
            <Skeleton variant="text" width="60%" height={30} />
            <Skeleton variant="text" width="40%" height={20} />
            <Skeleton
              variant="rectangular"
              width="30%"
              height={36}
              sx={{ mt: "auto" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default LoadingPageStore;
