import { PeopleDetails } from '@lucifer/core';
import { createSlice } from '@reduxjs/toolkit'
import {searchPeople} from '../TvMazeService'
interface PeopleState {
    peopleList: PeopleDetails[],
    status: 'idle' | 'loading' | 'succeeded' | 'failed',
    error: string | undefined
}  
const initialState:PeopleState = {peopleList:[],status:'idle',error:''};

const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {
    resetPeople: (state) => initialState
  },
  extraReducers: builder => {
    builder
    .addCase(searchPeople.pending, (state) => {
      state.status = 'loading'
    })
    .addCase(searchPeople.fulfilled, (state, action) => {
      state.status = 'succeeded'
      // Add any fetched posts to the array
      state.peopleList = action.payload
    })
    .addCase(searchPeople.rejected, (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    })
  }
});

export const { resetPeople } = peopleSlice.actions;
export default peopleSlice.reducer