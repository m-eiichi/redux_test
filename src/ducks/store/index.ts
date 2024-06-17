import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../counter/slises";
import { authSlice } from "../auth/slises";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;