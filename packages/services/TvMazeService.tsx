import axios, { AxiosResponse } from 'axios';
import { ShowDetails } from '@lucifer/core';

const baseUrl = "https://api.tvmaze.com/";

export const searchShow = (searchString: string): Promise<AxiosResponse<ShowDetails[]>> => {
    const searchUrl = baseUrl + 'search/shows?q=' + searchString;
    return axios.get<ShowDetails[]>(searchUrl);
};
