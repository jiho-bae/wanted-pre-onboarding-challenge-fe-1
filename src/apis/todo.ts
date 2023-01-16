import { AxiosResponse } from 'axios';
import { authRequest } from './config';

interface TodoApiTypes {
  getTodos: () => Promise<AxiosResponse>;
  getTodo: (todo: { id: string }) => Promise<AxiosResponse>;
  create: (todo: { title: string; content: string }) => Promise<AxiosResponse>;
  update: (todo: { id: string; title: string; content: string }) => Promise<AxiosResponse>;
  delete: (todo: { id: string }) => Promise<AxiosResponse>;
}

const todoApi: TodoApiTypes = {
  getTodos: () => authRequest.get('/todos'),
  getTodo: ({ id }) => authRequest.get(`/todos/${id}`),
  create: (todo) => authRequest.post('/todos', todo),
  update: ({ id, title, content }) => authRequest.put(`/todos/${id}`, { title, content }),
  delete: ({ id }) => authRequest.delete(`/todos/${id}`),
};

export default todoApi;
