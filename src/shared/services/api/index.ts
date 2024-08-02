import axios from 'axios';
import { errorInterceptor, responseInterceptor } from './axios-config/interceptors';
import { Environment } from '../../enviroment';

const Api = axios.create({
  baseURL: Environment.URL_BASE,
});

Api.interceptors.response.use(
  (response) => responseInterceptor(response),
  (error) => errorInterceptor(error),
);

export { Api };