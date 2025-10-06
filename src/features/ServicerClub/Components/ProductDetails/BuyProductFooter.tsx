"use client";

import { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useSnackbar } from "@/providers/SnackbarProvider";
import { useQueryClient } from "@tanstack/react-query";
import { useSubmitOrder } from "../../hooks/useSubmitOrder";

type BuyProductFooterProps = {
  price: number | string;
  productId: number;
};

function BuyProductFooter({ price, productId }: BuyProductFooterProps) {
  const userScore =
    useSelector((state: RootState) => state.user.UserScore) || 0;
  const agencyCode = useSelector((state: RootState) => state.auth.agencyCode);

  const { showMessage } = useSnackbar();
  const queryClient = useQueryClient();
  const [open, setOpen] = useState(false);

  const mutation = useSubmitOrder();
  const numericPrice = Number(price);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleConfirm = () => {
    if (!agencyCode || !productId) return;

    mutation.mutate(
      { agencyCode: Number(agencyCode), productId },
      {
        onSuccess: (res) => {
          if (res.IsSuccess) {
            showMessage(res.Message, "success");

            // ریفچ کوئری امتیاز کاربر بعد از خرید
            queryClient.invalidateQueries({
              queryKey: ["GetServicerCurrentScore", agencyCode],
              refetchType: "active",
            });
            console.log("userScore", userScore);
          } else {
            showMessage(res.Message, "error");
          }
          handleClose();
        },
        onError: (err: unknown) => {
          const message = err instanceof Error ? err.message : "خطای ناشناخته";
          alert("خطا در ارسال سفارش: " + message);
        },
      }
    );
  };

  return (
    <>
      <div className="p-2 border-t border-gray-100 flex justify-between items-center">
        <Button
          startIcon={<FaCartShopping size={12} className="ml-2" />}
          variant="contained"
          className="w-3/12"
          color="secondary"
          size="medium"
          onClick={handleOpen}
          disabled={userScore < numericPrice}
        >
          خرید
        </Button>
        <div className="flex gap-1 items-center justify-center">
          <span className="text-xl text-secondary font-bold">{price}</span>
          <span className="text-[8px] text-gray-400">امتیاز</span>
        </div>
      </div>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xs">
        <DialogTitle className="text-center font-bold text-lg">
          تایید خرید
        </DialogTitle>
        <DialogContent className="text-center text-sm">
          آیا از خرید این محصول اطمینان دارید؟
        </DialogContent>
        <DialogActions className="flex justify-center gap-3 pb-3">
          <Button variant="outlined" color="primary" onClick={handleClose}>
            انصراف
          </Button>
          <Button variant="contained" color="secondary" onClick={handleConfirm}>
            {mutation.isPending ? "در حال ارسال..." : "تایید"}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default BuyProductFooter;
