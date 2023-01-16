import { useEffect, useState } from 'react';

import Layout from '@components/templates/Layout';

import todoApi from '@apis/todo';

export default function Todos() {
  const [todos, setTodos] = useState([]);

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
      <ul>
        {todos.map((todo, idx) => (
          <li key={idx}>todo!</li>
        ))}
      </ul>
    </Layout>
  );
}
