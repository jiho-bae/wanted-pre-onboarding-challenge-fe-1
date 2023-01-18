import { Navigate, Outlet } from 'react-router-dom';

import { PATH } from '@src/libs/constant';
import storage from '@src/libs/storage';

interface AuthProps {
  isAuthPage: boolean;
}

export default function Auth({ isAuthPage }: AuthProps) {
  const isAuthenticated = !!storage.getToken();
  const redirectPath = isAuthPage ? PATH.home : PATH.todos;

  return isAuthPage === isAuthenticated ? <Outlet /> : <Navigate replace to={redirectPath} />;
}
