import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Layout from '@components/templates/Layout';
import Button from '@components/atoms/Button';

import todoApi from '@apis/todo';
import { PATH, TOKEN_KEY } from '@libs/constant';

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();

  function onClickLogout(e: React.MouseEvent) {
    e.preventDefault();
    localStorage.removeItem(TOKEN_KEY);

    return navigate(PATH.home, { replace: true });
  }

  useEffect(() => {
    async function getTodos() {
      const {
        data: { data: newTodos },
      } = await todoApi.getTodos();
      setTodos(newTodos);
    }
    getTodos();
  }, []);

  return (
    <Layout>
      <Button onClick={onClickLogout}>로그아웃</Button>
      <ul>
        {todos.map((todo, idx) => (
          <li key={idx}>todo!</li>
        ))}
      </ul>
    </Layout>
  );
}
