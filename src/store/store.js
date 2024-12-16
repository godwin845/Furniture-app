import { configureStore } from '@reduxjs/toolkit';
import productSlice from './productSlice'; // Adjust path as needed
import cartSlice from './cartSlice';       // Adjust path as needed

const store = configureStore({
    reducer: {
        cart: cartSlice,
        products: productSlice
    }
});

export default store;
