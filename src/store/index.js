import { configureStore } from '@reduxjs/toolkit';
import { portfolioSlice } from './portfolioSlice';

export const store = configureStore({
  reducer: {
    portfolio: portfolioSlice.reducer,
  },
});
