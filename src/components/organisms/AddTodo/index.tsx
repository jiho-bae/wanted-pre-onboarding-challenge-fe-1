import styled from '@emotion/styled';
import { AiOutlineRollback } from 'react-icons/ai';

import ContentTitle from '@components/molecules/ContentTitle';
import AddTodoForm from '@components/molecules/AddTodoForm';
import Button from '@components/atoms/Button';

import Gap from '@components/atoms/Gap';

import { BorderRadius, Colors, FontSize } from '@src/styles';
import { TodoType } from '@src/types';

interface AddTodoProps {
  addTodo: (todo: TodoType) => void;
  toggleAddMode: () => void;
  isAddMode: boolean;
}

export default function AddTodo({ addTodo, toggleAddMode, isAddMode }: AddTodoProps) {
  if (isAddMode) {
    return (
      <S.Container>
        <ContentTitle
          title={'할일 추가하기'}
          rightTabs={
            <AiOutlineRollback size={FontSize.l} color={Colors.darkGray} onClick={toggleAddMode} cursor="pointer" />
          }
        />
        <Gap size="1rem" />
        <AddTodoForm addTodo={addTodo} />
      </S.Container>
    );
  }

  return <Button onClick={toggleAddMode}>+</Button>;
}

const S = {
  Container: styled.div`
    width: 100%;
    background-color: ${Colors.lightGray};
    border-radius: ${BorderRadius.s};
    padding: 1rem;
  `,
  TitleWrapper: styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
  `,
};
