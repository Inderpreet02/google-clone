import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    term: null,
  },
  reducers: {
    setTerm: (state, action) => {
      state.term = action.payload.term; 
    }
  },
});

export const { setTerm } = appSlice.actions;

export const selectTerm = state => state.app.term;

export default appSlice.reducer;
