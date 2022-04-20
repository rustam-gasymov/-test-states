import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const reducers = {
  setIncrementValue: (state: typeof initialState) => {
    state.value = state.value + 20;
  },
  setNumber: (state: typeof initialState, { payload }: PayloadAction<number>) => {
    console.log("settnumberits new reducer from slice", payload);
    state.counter = state.counter + payload;
  },
  setDecrementValue: (state: typeof initialState, { payload }: PayloadAction<number>) => {
    console.log("decrement from decrement", payload);

    state.value = state.value - 20;
  },
};

const initialState = {
  isModalVisible: false,
  value: 0,
  counter: 0,
};

// export const configureToolsSlice = createSlice({
//   name: "configureTools",
//   initialState,
//   reducers,
// });

// export const { setDecrementValue, setNumber, setIncrementValue } = configureToolsSlice.actions;

// export default configureToolsSlice.reducer;
