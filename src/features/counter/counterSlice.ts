import { createSlice } from "@reduxjs/toolkit";

export const configureToolsSlice = createSlice({
  name: "configureTools",
  initialState: {
    isModalVisible: false,
    value: 0,
  },
  reducers: {
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

export const { setDecrementValue, changeVisibilityOfConfigureForm } = configureToolsSlice.actions;

export default configureToolsSlice.reducer;
