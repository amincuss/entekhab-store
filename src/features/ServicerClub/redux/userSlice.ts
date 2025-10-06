// store/slices/userSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  ServicerId: string | null;
  Name: string | null;
  Family: string | null;
  AgentCode: string | null;
  ServicerType: number | null;
  MobilePhone: string | null;
  BirthDate: string | null;
  NationalCode: string | null;
  FireBaseToken: string | null;
  Role: number | null;
  Detailedcode: string | null;
  ActiveInApplication: boolean | null;
  ApplicationLanguageValue: number | null;
  ApplicationLanguageTitle: string | null;
  Topics: number[] | null;
  UserScore: number | null; // ✅ اینجا می‌مونه
}

const initialState: UserState = {
  ServicerId: null,
  Name: null,
  Family: null,
  AgentCode: null,
  ServicerType: null,
  MobilePhone: null,
  BirthDate: null,
  NationalCode: null,
  FireBaseToken: null,
  Role: null,
  Detailedcode: null,
  ActiveInApplication: null,
  ApplicationLanguageValue: null,
  ApplicationLanguageTitle: null,
  Topics: null,
  UserScore: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<Omit<UserState, "UserScore">> // ✅ حذف UserScore از payload
    ) => {
      return { ...state, ...action.payload, UserScore: state.UserScore };
    },
    setUserScore: (state, action: PayloadAction<number | null>) => {
      state.UserScore = action.payload; // ✅ فقط اینجا مقدارش تغییر میکنه
    },
    clearUser: () => initialState,
  },
});

export const { setUser, clearUser, setUserScore } = userSlice.actions;
export default userSlice.reducer;
