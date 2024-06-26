import { createSlice } from "@reduxjs/toolkit";
const initialAuthState = {
  isAuth: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuth = true;
    },
    logout(state) {
      state.isAuth = false;
    },
  },
});

// 各actionクリエーターをエクスポートしている↓↓
export const authActions = authSlice.actions;
