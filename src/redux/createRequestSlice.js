import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  createRequesterObjectBody: [],
  createProductObjectBody: [],
  postCreateProductObject: {},
};

export const createRequestSlice = createSlice({
  name: 'createRequest',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    createRequesterObject: (state, action) => {
      state.createRequesterObjectBody = [...state.createRequesterObjectBody, action.payload];
    },
    createProductObject: (state, action) => {
      state.createProductObjectBody = [...state.createProductObjectBody, action.payload];
    },
    postCreateProductObject: (state, action) => {
      state.postCreateProductObject = action.payload
    },
  }

});

export const {
  createRequesterObject,
  createProductObject,
  postCreateProductObject } = createRequestSlice.actions;

export default createRequestSlice.reducer;
