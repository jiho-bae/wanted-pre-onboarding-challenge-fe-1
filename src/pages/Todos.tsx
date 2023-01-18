import { useNavigate } from 'react-router-dom';

import Layout from '@components/templates/Layout';
import TodoList from '@components/organisms/TodoList';
import AddTodo from '@components/organisms/AddTodo';
import Button from '@components/atoms/Button';

import { PATH } from '@libs/constant';
import { useToggle } from '@src/hooks';
import storage from '@libs/storage';
import useTodos from '@src/hooks/useTodos';

export default function Todos() {
  const [todos, addTodo, updateTodo, deleteTodo] = useTodos();
  const [isAddMode, toggleAddMode] = useToggle();
  const navigate = useNavigate();

  function onClickLogout(e: React.MouseEvent) {
    e.preventDefault();
    storage.removeToken();

    return navigate(PATH.home, { replace: true });
  }

  return (
    <Layout>
      <Button onClick={onClickLogout}>로그아웃</Button>
      <TodoList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
      <AddTodo addTodo={addTodo} isAddMode={isAddMode} toggleAddMode={toggleAddMode} />
    </Layout>
  );
}
