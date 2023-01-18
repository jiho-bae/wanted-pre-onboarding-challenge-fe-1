import { useState } from 'react';
import styled from '@emotion/styled';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';

import EditTodoForm from '@components/molecules/EditTodoForm';
import ContentTitle from '@components/molecules/ContentTitle';
import Card from '@components/atoms/Card';

import { Colors, FontSize } from '@src/styles';
import { TodoType } from '@src/types';

interface TodoCardProps extends React.ComponentProps<'li'> {
  todo: TodoType;
  updateTodo: (todo: TodoType) => void;
}

export default function TodoCard({ updateTodo, todo, ...props }: TodoCardProps) {
  const [isEditMode, seIsEditMode] = useState(false);
  const { title, content } = todo;
  const contentChunk = content.split('\n');

  function toggleEditMode() {
    seIsEditMode((prev) => !prev);
  }

  return (
    <Card {...props}>
      {isEditMode ? (
        <EditTodoForm todo={todo} updateTodo={updateTodo} toggleEditMode={toggleEditMode} />
      ) : (
        <>
          <ContentTitle
            title={title}
            rightTabs={
              <>
                <AiOutlineEdit size={FontSize.l} color={Colors.darkGray} onClick={toggleEditMode} cursor="pointer" />
                <AiOutlineDelete size={FontSize.l} color={Colors.darkGray} cursor="pointer" />
              </>
            }
          />
          <S.P>
            {contentChunk.map((chunk, idx) => (
              <S.Span key={idx}>{chunk}</S.Span>
            ))}
          </S.P>
        </>
      )}
    </Card>
  );
}

const S = {
  P: styled.p`
    font-size: ${FontSize.m};
  `,
  Span: styled.span`
    display: block;
  `,
};
