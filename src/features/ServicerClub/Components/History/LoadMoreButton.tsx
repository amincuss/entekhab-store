"use client";

import { Button } from "@mui/material";

interface LoadMoreButtonProps {
  onClick: () => void;
  isLoading?: boolean;
}

export default function LoadMoreButton({ onClick, isLoading }: LoadMoreButtonProps) {
  return (
    <div className="flex justify-center pt-2">
      <Button color="primary" variant="outlined" onClick={onClick} disabled={isLoading}>
        {isLoading ? "در حال بارگذاری..." : "بارگذاری بیشتر"}
      </Button>
    </div>
  );
}
