import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  priceUnits: [],
  measureUnits: [],
  deliveryTypes: [],
  businessPartners: [],
  productTypes: [],
  splitProfileStatuses: [],
  sectors: [],
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
    businessPartners: (state, action) => {
      state.businessPartners = action.payload;
    },
    productTypes: (state, action) => {
      state.productTypes = action.payload;
    },
    splitProfileStatuses: (state, action) => {
      state.splitProfileStatuses = action.payload;
    },
    sectors: (state, action) => {
      state.sectors = action.payload;
    },
  },
});


export const {
  priceUnits,
  measureUnits,
  deliveryTypes,
  businessPartners,
  productTypes,
  splitProfileStatuses,
  sectors
} = commonSlice.actions;

export default commonSlice.reducer;
