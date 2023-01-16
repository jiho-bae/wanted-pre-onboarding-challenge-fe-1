import { Routes, Route } from 'react-router-dom';
import Home from '@pages/Home';
import Join from '@pages/Join';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth/join" element={<Join />} />
      <Route path="/auth/login" element={<>login</>} />
      <Route path="/todos" element={<>todos</>} />
    </Routes>
  );
}
