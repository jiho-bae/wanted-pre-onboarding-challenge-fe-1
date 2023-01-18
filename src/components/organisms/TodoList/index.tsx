import styled from '@emotion/styled';

import TodoCard from '@components/molecules/TodoCard';

import { TodoType } from '@src/types';

interface TodoListProps {
  todos: TodoType[];
}

export default function TodoList({ todos }: TodoListProps) {
  return (
    <S.Ul>
      {todos.map(({ title, content }, idx) => (
        <TodoCard key={idx} title={title} content={content} />
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
