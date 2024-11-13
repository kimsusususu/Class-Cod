// store.js
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";
import userReducer from "./UserSlice"; // UserSlice를 가져옴

const Storee = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer, // user 리듀서 추가
  },
});

export default Storee;
