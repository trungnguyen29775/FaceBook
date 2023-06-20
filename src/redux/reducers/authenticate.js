import { createSlice } from '@reduxjs/toolkit';
const authenticateSlice= createSlice({
    name: 'authenticate',
    initialState: false,
    reducers: {
      login: (state) => {state.authenticated=true},
      logout: (state) =>{state.authenticate=false},
    },
  });

export const { login, logout } = authenticateSlice.actions;
export default authenticateSlice.reducer;