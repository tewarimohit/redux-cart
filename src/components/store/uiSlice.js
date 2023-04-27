const { createSlice } = require("@reduxjs/toolkit");

const initialState = { isCartVisible: false };

const uiSlice = createSlice({
  name: "cart-ui",
  initialState: initialState,
  reducers: {
    toggle(state) {
      state.isCartVisible = !state.isCartVisible;
    },
  },
});

export const cartUIActions = uiSlice.actions;
export default uiSlice.reducer;
