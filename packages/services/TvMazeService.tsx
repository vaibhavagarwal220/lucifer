import { AxiosResponse } from 'axios';
import { httpGet } from './HttpService'
import { PeopleDetails, ShowDetails } from '@lucifer/core';
import { peopleSearchQuery, showSearchQuery, TV_MAZE_BASE_URL } from './constants';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const searchShow = createAsyncThunk('searchShow', async (searchString: string,thunkAPI) => {
    const searchUrl = TV_MAZE_BASE_URL + showSearchQuery(searchString);
    const response = await httpGet<ShowDetails[]>(searchUrl);
    return response.data;
});
export const searchPeople = createAsyncThunk('searchPeople', async (searchString: string,thunkAPI) => {
    const searchUrl = TV_MAZE_BASE_URL + peopleSearchQuery(searchString);
    const response = await httpGet<PeopleDetails[]>(searchUrl);
    return response.data;
});
