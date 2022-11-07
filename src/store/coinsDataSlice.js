import { createSlice } from '@reduxjs/toolkit';
import {
  getUpdatedCoinsDataWithHistory7d,
  getUpdatedCoinsData,
  getUpdatedCoinsDataWithWatchlist,
} from 'helpers/coinsData';

const coinsDataInitialState = null;

export const coinsDataSlice = createSlice({
  name: 'coinsData',
  initialState: coinsDataInitialState,
  reducers: {
    setCoinsData(state, action) {
      return action.payload.data;
    },

    updateCoinsData(state, action) {
      return getUpdatedCoinsData(state, action.payload.newData);
    },

    addHistory7dData(state, action) {
      if (!state) return state;
      return getUpdatedCoinsDataWithHistory7d(
        state,
        action.payload.history7dCoinsList
      );
    },

    addWatchlistData(state, action) {
      return getUpdatedCoinsDataWithWatchlist(
        state,
        action.payload.watchlistData
      );
    },
  },
});

export const {
  setCoinsData,
  updateCoinsData,
  addHistory7dData,
  addWatchlistData,
} = coinsDataSlice.actions;
