import { useMutation } from "@tanstack/react-query";
import { submitOrder } from "../api/api";

export const useSubmitOrder = () => {
  return useMutation({
    mutationFn: submitOrder,
  });
};
