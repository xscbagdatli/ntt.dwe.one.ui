import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  requirements: [],
  filteredRequirementsForTable: [],
  requirementWithId: [],
  selectedRequestIndex: null,
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
    selectedRequestIndex: (state, action) => {
      state.selectedRequestIndex = action.payload;
    },
  },
});


export const {
  requirements,
  filteredRequirementsForTable,
  requirementWithId,
  selectedRequestIndex
} = requestsListSlice.actions;

export default requestsListSlice.reducer;
