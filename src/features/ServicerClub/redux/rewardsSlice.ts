import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TProductList } from "../type";

const initialState: TProductList = {
  Categories: [],
  Products: [],
};

const rewardsSlice = createSlice({
  name: "rewards",
  initialState,
  reducers: {
    setData(state, action: PayloadAction<TProductList>) {
      state.Categories = action.payload.Categories;
      state.Products = action.payload.Products;
    },
    clearData(state) {
      state.Categories = [];
      state.Products = [];
    },
  },
});

export const { setData, clearData } = rewardsSlice.actions;
export default rewardsSlice.reducer;
