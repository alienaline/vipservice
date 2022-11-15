import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./store";

interface AviaState {
  data: {
    from?: string,
    to?: string,
    departureDate?: string,
    arrivalDate?: string
  }
}

const initialState: AviaState = {
  data: {}
};

export const aviaSlice = createSlice({
  name: "avia",
  initialState,
  reducers: {
    createData: (state, action) => {
      state.data = action.payload;
    }
  }
});

export const aviaData = (state: RootState) => state.avia.data;

export const { createData } = aviaSlice.actions;

export default aviaSlice.reducer;