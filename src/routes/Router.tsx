import { Routes, Route } from 'react-router-dom';
import Home from '@pages/Home';
import Join from '@pages/Join';
import Todos from '@pages/Todos';
import Auth from './Auth';

import { PATH } from '@libs/constant';

export default function Router() {
  return (
    <Routes>
      <Route element={<Auth isAuthPage={false} />}>
        <Route path={PATH.home} element={<Home />} />
        <Route path={PATH.join} element={<Join />} />
      </Route>
      <Route element={<Auth isAuthPage />}>
        <Route path={PATH.todos} element={<Todos />} />
      </Route>
    </Routes>
  );
}
