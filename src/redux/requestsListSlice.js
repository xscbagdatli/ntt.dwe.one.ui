import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  requirements: [],
  filteredRequirementsForTable: [],
  requirementWithId: [],
  selectedRequestId: null,
};

export const requestsListSlice = createSlice({
  name: 'requestsList',
  initialState,

  reducers: {
    requirements: (state, action) => {
      state.requirements = action.payload;
    },
    filteredRequirementsForTable: (state, action) => {
      state.filteredRequirementsForTable = action.payload;
    },
    requirementWithId: (state, action) => {
      state.requirementWithId = action.payload;
    },
    selectedRequestId: (state, action) => {
      state.selectedRequestId = action.payload;
    },
  },
});


export const {
  requirements,
  filteredRequirementsForTable,
  requirementWithId,
  selectedRequestId
} = requestsListSlice.actions;

export default requestsListSlice.reducer;
