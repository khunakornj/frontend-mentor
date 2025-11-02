import type { FetchOptions } from '../types/common';
import axios from 'axios';
import type { AxiosInstance } from 'axios';

export function fetcher({ version = 1 }: FetchOptions = {}) {
  let url = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';
  url += `/${version}`;

  let deviceUid = localStorage.getItem('deviceUid');
  if (!deviceUid) {
    deviceUid = 'temp';
    localStorage.setItem('deviceUid', deviceUid);
  }

  const apiClient: AxiosInstance = axios.create({
    baseURL: url,
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
      device: deviceUid,
    },
  });

  // Request interceptor (e.g., attach JWT)
  // apiClient.interceptors.request.use(
  //   (config: AxiosRequestConfig) => {
  //     const token = localStorage.getItem('token')
  //     if (token && config.headers) {
  //       config.headers.Authorization = `Bearer ${token}`
  //     }
  //     return config
  //   },
  //   (error) => Promise.reject(error),
  // )

  // Response interceptor (handle errors globally)
  // apiClient.interceptors.response.use(
  //   (response: AxiosResponse) => response,
  //   (error) => {
  //     if (error.response?.status === 401) {
  //       // optional: redirect to login
  //       console.warn('Unauthorized, redirecting...')
  //     }
  //     return Promise.reject(error)
  //   },
  // )

  return apiClient;
}

export default fetcher;
