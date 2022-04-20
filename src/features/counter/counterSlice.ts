import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  isLoading?: boolean;
  isModalVisible?: boolean;
  value?: number;
  counter?: number;
}

const initialState = {
  isModalVisible: false,
  value: 0,
  counter: 0,
};

const reducers = {
  setIncrementValue: (state: typeof initialState) => {
    state.value++;
  },
  setNumber: (state: typeof initialState, { payload }: PayloadAction<number>) => {
    console.log("settnumberits new reducer from slice", payload);
    state.counter = state.counter + payload;
  },
  setDecrementValue: (state: typeof initialState, { payload }: PayloadAction) => {
    console.log("decrement from decrement", payload);

    state.value = state.value - 20;
  },
  changeVisibilityOfConfigureForm: (
    state: typeof initialState,
    { payload }: PayloadAction<boolean>
  ) => {
    state.isModalVisible = payload;
  },
};

export const configureToolsSlice = createSlice({
  name: "configureTools",
  initialState,
  reducers,
});

export const { setDecrementValue, setNumber, changeVisibilityOfConfigureForm, setIncrementValue } =
  configureToolsSlice.actions;

export default configureToolsSlice.reducer;
