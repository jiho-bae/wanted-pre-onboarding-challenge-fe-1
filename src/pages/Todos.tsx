import { useNavigate } from 'react-router-dom';

import Layout from '@components/templates/Layout';
import TodoList from '@components/organisms/TodoList';
import AddTodo from '@components/organisms/AddTodo';
import ContentTitle from '@components/molecules/ContentTitle';
import Button from '@components/atoms/Button';

import { PATH } from '@libs/constant';
import { useToggle } from '@src/hooks';
import storage from '@libs/storage';
import useTodos from '@src/hooks/useTodos';
import { Colors, FontSize } from '@src/styles';

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
      <ContentTitle
        title="내 할일 목록"
        titleColor={Colors.react}
        titleSize={FontSize.xl}
        rightTabs={
          <Button onClick={onClickLogout} bgColor={Colors.bgTomato}>
            로그아웃
          </Button>
        }
      />
      <TodoList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
      <AddTodo addTodo={addTodo} isAddMode={isAddMode} toggleAddMode={toggleAddMode} />
    </Layout>
  );
}
