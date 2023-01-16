import axios, { AxiosInstance } from 'axios';
import { TOKEN_KEY } from '@libs/constant';

const addInterceptors = (instance: AxiosInstance) => {
  instance.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return Promise.reject(error.response);
    }
  );
  return instance;
};

const addAuthInterceptors = (instance: AxiosInstance) => {
  instance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem(TOKEN_KEY);
      if (!token) return config;

      config.headers = {
        Authorization: token,
      };
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return Promise.reject(error.response);
    }
  );
  return instance;
};

const axiosInstance = () => {
  return axios.create({
    baseURL: 'http://localhost:8080/',
    timeout: 5000,
  });
};

const createInstance = () => addInterceptors(axiosInstance());
const createAuthInstance = () => addAuthInterceptors(axiosInstance());

export const request = createInstance();
export const authRequest = createAuthInstance();
