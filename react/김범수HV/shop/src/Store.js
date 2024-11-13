import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./store/CartSlice";
import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
    name: "김햄스터",
    initialState: { name: "김햄스터", age: 21 }, // 사용자 정보의 초기 상태
  });

const store = configureStore({
  reducer: {
    user: user.reducer,
    cart: cartReducer,
  },
});

export default store;