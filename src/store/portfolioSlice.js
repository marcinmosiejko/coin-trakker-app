import { createSlice } from '@reduxjs/toolkit';
import { getFromLocalStorage, saveToLocalStorage } from 'helpers/general';

const usersPortfolio = getFromLocalStorage('portfolio');

const initialPortfolioState = usersPortfolio || [{ code: 'BTC', quantity: 7 }];

export const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState: initialPortfolioState,
  reducers: {
    addPortfolioCoin(state, action) {
      const newState = state.concat(action.payload);
      saveToLocalStorage('portfolio', newState);
      return newState;
    },

    deletePortfolioCoin(state, action) {
      const newState = state.filter(
        (coin) => coin.code !== action.payload.code
      );
      saveToLocalStorage('portfolio', newState);
      return newState;
    },

    editPortfolioCoin(state, action) {
      // Delete previous instance of the coin and add new instance
      const newState = state
        .filter((coin) => coin.code !== action.payload.code)
        .concat({
          code: action.payload.code,
          quantity: action.payload.quantity,
        });
      saveToLocalStorage('portfolio', newState);
      return newState;
    },
  },
});

export const { addPortfolioCoin, deletePortfolioCoin, editPortfolioCoin } =
  portfolioSlice.actions;
