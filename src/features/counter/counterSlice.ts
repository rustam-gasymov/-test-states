import { createSlice } from "@reduxjs/toolkit";

export const configureToolsSlice = createSlice({
  name: "configureTools",
  initialState: {
    isModalVisible: false,
    value: 0,
    counter: 0,
  },
  reducers: {
    setIncrementValue: (state) => {
      state.value++;
    },
    setNumber: (state, { payload }) => {
      console.log("settnumberits new reducer from slice", payload);
      state.counter += payload;
    },
    setDecrementValue: (state, { payload }) => {
      console.log("decrement from decrement", payload);

      state.value = state.value - 10;
    },
    changeVisibilityOfConfigureForm: (state, { payload }) => {
      state.isModalVisible = payload;
    },
  },
  extraReducers: {},
});

export const { setDecrementValue, setNumber, changeVisibilityOfConfigureForm, setIncrementValue } =
  configureToolsSlice.actions;

export default configureToolsSlice.reducer;
