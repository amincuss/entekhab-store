import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  callerId: string | null;
  password: string | null;
  agencyCode: string | null;
  currentScore:number;
}

const initialState: AuthState = {
  callerId: null,
  password: null,
  agencyCode: null,
  currentScore:0,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthHeaders: (
      state,
      action: PayloadAction<{ callerId: string; password: string }>
    ) => {
      state.callerId = action.payload.callerId;
      state.password = action.payload.password;
    },
    setAgencyCode: (state, action: PayloadAction<string>) => {
      state.agencyCode = action.payload;
    },
    setCurrentScore: (state, action: PayloadAction<number>) => {
      state.currentScore = action.payload;
    }
  },
});

export const { setAuthHeaders, setAgencyCode,setCurrentScore } = authSlice.actions;
export default authSlice.reducer;
