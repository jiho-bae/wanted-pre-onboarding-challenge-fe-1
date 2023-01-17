import { Routes, Route } from 'react-router-dom';
import Home from '@pages/Home';
import Join from '@pages/Join';
import Todos from '@pages/Todos';
import withAuth from './withAuth';

export default function Router() {
  const AuthTodos = withAuth(Todos);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth/join" element={<Join />} />
      <Route path="/todos" element={<AuthTodos />} />
    </Routes>
  );
}
