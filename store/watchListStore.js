import { configureStore, createSlice } from "@reduxjs/toolkit";

const watchListSlice = createSlice({
  name: "watchList",
  initialState: [],
  reducers: {
    addToWatchlist(state, action) {
      const exists = state.some((item) => {
        return item.id === action.payload.id;
      });
      if (!exists) {
        state.push(action.payload);
      }
    },
    removeFromWatchlist(state, action) {
      state.filter((item) => {
        return item.id !== action.payload.id;
      });
    },
  },
});

export const store = configureStore(watchListSlice);

export const watchListActions = watchListSlice.actions;
