import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TGetServicerOrders } from "../type";

const initialState: TGetServicerOrders = {
  Orders: [],
  Statuses: [],
};
const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    setOrder(state, action: PayloadAction<TGetServicerOrders>) {
      state.Orders = action.payload.Orders;
      state.Statuses = action.payload.Statuses;
    },
    clearData(state) {
      state.Orders = [];
      state.Statuses = [];
    },
  },
});
export const { setOrder, clearData } = orderSlice.actions;
export default orderSlice.reducer;
