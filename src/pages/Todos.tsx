import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Layout from '@components/templates/Layout';
import TodoList from '@components/organisms/TodoList';
import AddTodo from '@components/organisms/AddTodo';
import Button from '@components/atoms/Button';

import todoApi from '@apis/todo';
import { PATH } from '@libs/constant';
import { TodoType } from '@src/types';
import { useToggle } from '@src/hooks';
import storage from '@libs/storage';

export default function Todos() {
  const navigate = useNavigate();
  const [isAddMode, toggleAddMode] = useToggle();
  const [todos, setTodos] = useState<TodoType[]>([]);

  function onClickLogout(e: React.MouseEvent) {
    e.preventDefault();
    storage.removeToken();

    return navigate(PATH.home, { replace: true });
  }

  function addTodo(todo: TodoType) {
    setTodos((prevTodos) => [...prevTodos, { ...todo }]);
    toggleAddMode();
  }

  function updateTodo({ id, title, content }: TodoType) {
    const newTodos = [...todos];
    const targetIdx = newTodos.findIndex((todo) => todo.id === id);
    newTodos[targetIdx] = { ...newTodos[targetIdx], title, content };

    setTodos(newTodos);
  }

  function deleteTodo(id: string) {
    const newTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(newTodos);
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
      <TodoList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
      <AddTodo addTodo={addTodo} isAddMode={isAddMode} toggleAddMode={toggleAddMode} />
    </Layout>
  );
}
