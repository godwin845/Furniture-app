// store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';  // Adjust path as needed
import cartReducer from './cartSlice';  // Adjust path as needed
import productsReducer from './productSlice';  // Adjust path as needed

// Define RootState type
export interface RootState {
  auth: AuthState;
  cart: CartState;
  products: ProductsState;
}

const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    products: productsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export default store;