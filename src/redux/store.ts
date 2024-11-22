import { configureStore } from "@reduxjs/toolkit";
import covidReducer from "./reducers/covidReducer";
import filterreducer from "./reducers/filterreducer";

export const store = configureStore({
  reducer: {
    covid: covidReducer,
    filterdata:filterreducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
