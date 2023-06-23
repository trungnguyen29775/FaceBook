import { createSlice, configureStore } from '@reduxjs/toolkit'

const store = createStore(
    (state = {authenticated: false}) => state
  );