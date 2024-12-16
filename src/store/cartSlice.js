// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action) => {
      // Check if the product is already in the cart
      const existingProduct = state.find(product => product.id === action.payload.id);
      if (!existingProduct) {
        state.push(action.payload);
      }
    },
    remove: (state, action) => {
      return state.filter(product => product.id !== action.payload);
    }
  }
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;