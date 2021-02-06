import { ShowDetails } from '@lucifer/core';
import { createSlice } from '@reduxjs/toolkit'
import {searchShow} from '../TvMazeService'
interface ShowsState {
    showsList: ShowDetails[],
    status: 'idle' | 'loading' | 'succeeded' | 'failed',
    error: string | undefined
}  
const initialState:ShowsState = {showsList:[],status:'idle',error:''};

const showsSlice = createSlice({
  name: 'shows',
  initialState,
  reducers: {
    resetShows: (state) => initialState
  },
  extraReducers: builder => {
    builder
    .addCase(searchShow.pending, (state, action) => {
      state.status = 'loading'
    })
    .addCase(searchShow.fulfilled, (state, action) => {
      state.status = 'succeeded'
      // Add any fetched posts to the array
      state.showsList = action.payload
    })
    .addCase(searchShow.rejected, (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    })
  }
});

export const {resetShows} = showsSlice.actions;
export default showsSlice.reducer