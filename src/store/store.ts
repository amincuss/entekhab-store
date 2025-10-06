import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSlice";
import rewardsReducer from "../features/ServicerClub/redux/rewardsSlice";
import userReducer from "../features/ServicerClub/redux/userSlice";
import authReducer from "./slices/authSlice";
export const store = configureStore({
  reducer: {
    theme: themeReducer,
    rewards: rewardsReducer,
    user: userReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
