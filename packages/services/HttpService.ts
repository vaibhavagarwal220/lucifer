import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export const httpGet = <O>(url: string): Promise<AxiosResponse<O>> => {
    return axios.get<O>(url);
};
export const httpPost = <I,O>(url: string,body:I): Promise<AxiosResponse<O>> => {
    return axios.post<O>(url,body);
};
export const httpPut = <I,O>(url: string,body:I): Promise<AxiosResponse<O>> => {
    return axios.put<O>(url,body);
};
export const httpPatch = <I,O>(url: string,body:I): Promise<AxiosResponse<O>> => {
    return axios.patch<O>(url,body);
};
export const httpDelete = <I,O>(url: string,body:I): Promise<AxiosResponse<O>> => {
    return axios.delete<O>(url);
};


