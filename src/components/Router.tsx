import { Routes, Route } from 'react-router-dom';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<>home</>} />
      <Route path="/auth/join" element={<>join</>} />
      <Route path="/auth/login" element={<>login</>} />
      <Route path="/todos" element={<>todos</>} />
    </Routes>
  );
}
