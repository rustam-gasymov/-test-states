import { createSlice } from "@reduxjs/toolkit";

export const configureToolsSlice = createSlice({
  name: "configureTools",
  initialState: {
    value: 0,
    counter: 0,
  },
  reducers: {
    setNumber: (state, { payload }) => {
      console.log("settnumberits new reducer from slice", payload);
      state.counter += payload;
    },
    setDecrementValue: (state, { payload }) => {
      console.log("decrement from decrement", payload);

      state.value = state.value - 10;
    },
  },
  extraReducers: {},
});

export const { setDecrementValue, setNumber } = configureToolsSlice.actions;

export default configureToolsSlice.reducer;
