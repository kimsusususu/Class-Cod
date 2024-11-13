// CartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    count: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.count += 1;  // 이미 있는 상품이면 수량만 증가
      } else {
        state.items.push({ ...action.payload, count: 1 }); // 새 상품이면 count 1로 추가
      }
      state.count += 1;
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      state.count -= 1;
    },
    changeCount: (state, action) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) item.count = action.payload.count;
    },
  },
});

export const { addItem, deleteItem, changeCount } = cartSlice.actions;
export default cartSlice.reducer;
