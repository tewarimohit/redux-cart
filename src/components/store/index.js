import { configureStore } from "@reduxjs/toolkit";
import cartUIReducer from "./uiSlice";
import cartReducer from "./cartSlice";

const store = configureStore({
  reducer: { ui: cartUIReducer, cart: cartReducer },
});

export default store;
