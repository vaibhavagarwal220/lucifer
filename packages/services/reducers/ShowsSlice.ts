import { ShowDetails } from '@lucifer/core';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {searchShow} from '../TvMazeService'

export const getShows = createAsyncThunk('getShows', async (searchString:string,thunkAPI) => {
    const response = await searchShow(searchString);
    return response.data;
})
interface ShowsState {
    shows: ShowDetails[],
    status: 'idle' | 'loading' | 'succeeded' | 'failed',
    error: string | undefined
}  
const initialState:ShowsState = {shows:[],status:'idle',error:''};

const showsSlice = createSlice({
  name: 'shows',
  initialState,
  reducers: {
  },
  extraReducers: builder => {
    builder
    .addCase(getShows.pending, (state, action) => {
      state.status = 'loading'
    })
    .addCase(getShows.fulfilled, (state, action) => {
      state.status = 'succeeded'
      // Add any fetched posts to the array
      state.shows = action.payload
    })
    .addCase(getShows.rejected, (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    })
  }
});

export const {} = showsSlice.actions;
export default showsSlice.reducer