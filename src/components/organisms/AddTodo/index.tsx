import styled from '@emotion/styled';
import { BsFillBackspaceReverseFill } from 'react-icons/bs';

import AddTodoForm from '@components/molecules/AddTodoForm';
import Button from '@components/atoms/Button';
import Title from '@components/atoms/Title';
import Gap from '@components/atoms/Gap';

import { BorderRadius, Colors, FontSize, FontWeight } from '@src/styles';
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
        <S.TitleWrapper>
          <Title color={Colors.darkGray} fontWeight={FontWeight.bold}>
            할일 추가하기
          </Title>
          <BsFillBackspaceReverseFill
            size={FontSize.l}
            color={Colors.darkGray}
            onClick={toggleAddMode}
            cursor="pointer"
          />
        </S.TitleWrapper>
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
