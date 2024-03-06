import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: {},
  initialLoading: true,
  counter: 0,
  prices: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    increment: (state, action) => {
      console.log("action", action);
      state.counter = state.counter + action.payload;
    },
    decrement: (state, action) => {
      state.counter = state.counter - 1;
    },
    setuser: (state, action) => {
      state.userData = action.payload;
    },
    setInitialLoading: (state, action) => {
      state.initialLoading = action.payload;
    },
  },
});

export const { increment, decrement, setuser, setInitialLoading } =
  userSlice.actions;

export default userSlice.reducer;
