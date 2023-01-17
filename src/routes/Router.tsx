import { Routes, Route } from 'react-router-dom';
import Home from '@pages/Home';
import Join from '@pages/Join';
import Todos from '@pages/Todos';
import Auth from './Auth';

export default function Router() {
  return (
    <Routes>
      <Route element={<Auth isAuthPage={false} />}>
        <Route path="/" element={<Home />} />
        <Route path="/auth/join" element={<Join />} />
      </Route>
      <Route element={<Auth isAuthPage />}>
        <Route path="/todos" element={<Todos />} />
      </Route>
    </Routes>
  );
}
