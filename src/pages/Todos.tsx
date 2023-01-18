import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Layout from '@components/templates/Layout';
import TodoList from '@components/organisms/TodoList';
import AddTodo from '@components/organisms/AddTodo';
import Button from '@components/atoms/Button';

import todoApi from '@apis/todo';
import { PATH, TOKEN_KEY } from '@libs/constant';
import { TodoType } from '@src/types';

export default function Todos() {
  const navigate = useNavigate();
  const [isAddMode, setIsAddMode] = useState(false);
  const [todos, setTodos] = useState<TodoType[]>([]);

  function onClickLogout(e: React.MouseEvent) {
    e.preventDefault();
    localStorage.removeItem(TOKEN_KEY);

    return navigate(PATH.home, { replace: true });
  }

  function addTodo(todo: TodoType) {
    setTodos((prevTodos) => [...prevTodos, { ...todo }]);
    toggleAddMode();
  }

  function toggleAddMode() {
    setIsAddMode((prev) => !prev);
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
      <TodoList todos={todos} />
      <AddTodo addTodo={addTodo} isAddMode={isAddMode} toggleAddMode={toggleAddMode} />
    </Layout>
  );
}
