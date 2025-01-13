// store/cartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define types for product and state
interface Product {
  id: number;
  name: string;
  price: number;
  // Add other product fields as needed
}

interface CartState {
  items: Product[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Product>) => {
      const existingProduct = state.items.find(product => product.id === action.payload.id);
      if (!existingProduct) {
        state.items.push(action.payload);
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(product => product.id !== action.payload);
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;