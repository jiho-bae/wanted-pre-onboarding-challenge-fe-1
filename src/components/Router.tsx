import { Routes, Route } from 'react-router-dom';
import Home from '@pages/Home';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth/join" element={<>join</>} />
      <Route path="/auth/login" element={<>login</>} />
      <Route path="/todos" element={<>todos</>} />
    </Routes>
  );
}
