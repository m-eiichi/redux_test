import { createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, showNum: true };

export const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showNum = !state.showNum;
    },
  },
});

export const counterActions = counterSlice.actions;
