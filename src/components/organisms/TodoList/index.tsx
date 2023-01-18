import styled from '@emotion/styled';

import TodoCard from '@components/molecules/TodoCard';

import { TodoType } from '@src/types';

interface TodoListProps {
  todos: TodoType[];
  updateTodo: (todo: TodoType) => void;
  deleteTodo: (id: string) => void;
}

export default function TodoList({ todos, updateTodo, deleteTodo }: TodoListProps) {
  return (
    <S.Ul>
      {todos.map((todo, idx) => (
        <TodoCard key={idx} todo={todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />
      ))}
    </S.Ul>
  );
}

const S = {
  Ul: styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 1rem 0px;
  `,
};
