import {api} from 'app/utils/constant';
import axios from 'axios';

export const httpService = axios.create({
  baseURL: api.BFF,
  timeout: 2000,
});

httpService.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || 'Something went wrong!'
    )
);
