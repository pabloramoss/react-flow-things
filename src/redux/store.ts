import { configureStore } from "@reduxjs/toolkit";

import graphReducer from "../redux/slices/graphSlice";

export const store = configureStore({
  reducer: {
    graph: graphReducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
