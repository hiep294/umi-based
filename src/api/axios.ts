import Axios from 'axios';
import configs from '@/config';
import { token } from './authToken';

const axiosInstance = Axios.create({
  timeout: 3 * 60 * 1000,
  baseURL: configs.API_DOMAIN,
});
axiosInstance.interceptors.request.use(
  config => {
    // eslint-disable-next-line no-param-reassign
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error),
);

export const sendGet = (url: string, params?: any) => {
  console.log('send Get running', configs.API_DOMAIN);
  return axiosInstance.get(url, { params });
};
export const sendPost = (url: string, params?: any, queryParams?: any) =>
  axiosInstance.post(url, params, { params: queryParams });
export const sendPut = (url: string, params?: any) =>
  axiosInstance.put(url, params);
export const sendPatch = (url: string, params?: any) =>
  axiosInstance.patch(url, params);
export const sendDelete = (url: string, params?: any) =>
  axiosInstance.delete(url, { params });
