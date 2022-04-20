export const reducers = {
  setIncrementValue: (state: any) => {
    state.value++;
  },
  setNumber: (state: any, { payload }: any) => {
    console.log("settnumberits new reducer from slice", payload);
    state.counter += payload;
  },
  setDecrementValue: (state: any, { payload }: any) => {
    console.log("decrement from decrement", payload);

    state.value = state.value - 10;
  },
};
