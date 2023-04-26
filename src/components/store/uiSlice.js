const { createSlice } = require("@reduxjs/toolkit");

const initialState = { isCartVisible: false };

const cartUI = createSlice({
  name: "cart-ui",
  initialState: initialState,
  reducers: {
    toggle(state) {
      state.isCartVisible = !state.isCartVisible;
    },
  },
});

export const cartUIActions = cartUI.actions;
export default cartUI.reducer;
