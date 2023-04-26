import { configureStore } from "@reduxjs/toolkit";
import cartUIReducer from "./uiSlice";

const store = configureStore({
  reducer: { ui: cartUIReducer },
});

export default store;
