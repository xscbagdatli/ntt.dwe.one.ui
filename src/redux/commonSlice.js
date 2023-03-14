import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  priceUnits: [],
  measureUnits: [],
  deliveryTypes: [],
};

export const commonSlice = createSlice({
  name: 'common',
  initialState,

  reducers: {
    priceUnits: (state, action) => {
      state.priceUnits = action.payload;
    },
    measureUnits: (state, action) => {
      state.measureUnits = action.payload;
    },
    deliveryTypes: (state, action) => {
      state.deliveryTypes = action.payload;
    },
  },
});


export const {
  priceUnits,
  measureUnits,
  deliveryTypes
} = commonSlice.actions;

export default commonSlice.reducer;
