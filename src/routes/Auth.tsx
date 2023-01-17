import { Navigate, Outlet } from 'react-router-dom';

import { TOKEN_KEY, PATH } from '@src/libs/constant';

interface AuthProps {
  isAuthPage: boolean;
}

export default function Auth({ isAuthPage }: AuthProps) {
  const isAuthenticated = !!localStorage.getItem(TOKEN_KEY);
  const redirectPath = isAuthPage ? PATH.home : PATH.todos;

  return isAuthPage === isAuthenticated ? <Outlet /> : <Navigate replace to={redirectPath} />;
}
