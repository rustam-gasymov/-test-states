import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  isModalVisible: false,
  value: 0,
  counter: 0,
};

export const configureToolsSlice = createSlice({
  name: "configureTools",
  initialState,
  reducers: {
    setIncrementValue: (state) => {
      state.value++;
    },
    setNumber: (state, { payload }) => {
      console.log("settnumberits new reducer from slice", payload);
      state.counter = state.counter + payload;
    },
    setDecrementValue: (state, { payload }) => {
      console.log("decrement from decrement", payload);

      state.value = state.value - 20;
    },
  },
});

export const { setDecrementValue, setNumber, setIncrementValue } = configureToolsSlice.actions;

export default configureToolsSlice.reducer;
