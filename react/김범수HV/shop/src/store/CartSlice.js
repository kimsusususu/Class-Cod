import { createSlice } from "@reduxjs/toolkit";



const cart = createSlice({
  name: "cart",
  initialState: [
    { id: 0, name: "ONE", count: 2 },
    { id: 2, name: "THREE", count: 1 },
  ],
  reducers: {
    changeCount(state, action) {
      const i = state.findIndex((product) => product.id === action.payload);
      state[i].count += 1; //수량증가

    },
    decreaseCount(state, action) {
        const i = state.findIndex((product) => product.id === action.payload);
        if (i >= 0 && state[i].count > 0) {
          state[i].count -= 1; // 수량 감소
        }
      },
    addItem(state, action) {
      const pd = {
        id: action.payload.id,
        name: action.payload.title,
        count: 1,
      };
      state.push(pd);
    },
    deleteItem(state, action) {
      const i = state.findIndex((product) => product.id === action.payload);
      state.splice(i, 1);
    },
  },
});

export const { changeCount, addItem, deleteItem ,decreaseCount} = cart.actions;
export default cart.reducer;