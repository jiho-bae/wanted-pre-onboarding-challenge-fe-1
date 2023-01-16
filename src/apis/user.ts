import { AxiosResponse } from 'axios';
import { request } from './config';

interface UserApiTypes {
  signUp: (userInfo: { email: string; password: string }) => Promise<AxiosResponse>;
  login: (userInfo: { email: string; password: string }) => Promise<AxiosResponse>;
}

const userApi: UserApiTypes = {
  signUp: (userInfo) => request.post('/user/create', userInfo),
  login: (userInfo) => request.post('/user/login', userInfo),
};

export default userApi;
