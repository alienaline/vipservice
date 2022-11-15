import { configureStore } from "@reduxjs/toolkit";
import aviaReducer from "./aviaSlice";

export const store = configureStore({
    reducer: {
      avia: aviaReducer
    }
});
  
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
