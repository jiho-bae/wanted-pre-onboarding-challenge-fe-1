export const REGEX = {
  email: /[A-Za-z0-9.]+@[A-Za-z0-9]+\.[A-Za-z0-9]+/,
  password: /[A-Za-z0-9!@#$%^&*()_+]{8,20}/,
};

export const TOKEN_KEY = 'token';

export const PATH = {
  home: '/',
  join: '/auth/join',
  todos: '/todos',
};
