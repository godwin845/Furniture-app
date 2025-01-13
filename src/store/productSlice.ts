// store/productsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define types for product and state
interface Product {
  id: number;
  name: string;
  price: number;
  // Add other product fields as needed
}

interface ProductsState {
  data: Product[];
}

const initialState: ProductsState = {
  data: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.data = action.payload;
    },
  },
});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;