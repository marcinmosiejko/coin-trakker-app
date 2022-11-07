import { configureStore } from '@reduxjs/toolkit';
import { portfolioRawDataSlice } from './portfolioRawDataSlice';
import { coinsDataSlice } from './coinsDataSlice';

export const store = configureStore({
  reducer: {
    coinsData: coinsDataSlice.reducer,
    portfolioRawData: portfolioRawDataSlice.reducer,
  },
});
