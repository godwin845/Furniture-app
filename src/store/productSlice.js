import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.data = action.payload; // Set products data in the state
    },
  },
});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;