// store/authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define types for the state
interface AuthState {
  isAuthenticated: boolean;
  user: { [key: string]: any } | null; // Adjust based on your user data structure
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ [key: string]: any }>) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;