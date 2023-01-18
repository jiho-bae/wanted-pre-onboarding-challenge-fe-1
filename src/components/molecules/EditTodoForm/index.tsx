import { useState } from 'react';
import styled from '@emotion/styled';
import { AiOutlineDown, AiOutlineEdit } from 'react-icons/ai';

import Form from '@components/atoms/Form';
import Input from '@components/atoms/Input';
import TextArea from '@components/atoms/TextArea';

import todoApi from '@apis/todo';
import { TodoType } from '@src/types';
import { Colors, FontSize } from '@src/styles';

interface EditTodoFormProps {
  todo: TodoType;
  toggleEditMode: () => void;
  updateTodo: (todo: TodoType) => void;
}

export default function EditTodoForm({ updateTodo, toggleEditMode, todo }: EditTodoFormProps) {
  const [title, setTitle] = useState(todo.title);
  const [content, setContent] = useState(todo.content);

  function onChangeTitle(e: React.ChangeEvent<HTMLInputElement>) {
    setTitle(e.target.value);
  }
  function onChangeContent(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setContent(e.target.value);
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!title || !content) return;

    todoApi.update({ id: todo.id, title, content });
    updateTodo({ ...todo, title, content });
    toggleEditMode();
  }

  return (
    <Form onSubmit={onSubmit}>
      <S.TitleWrapper>
        <div></div>
        <S.TitleIconWrapper>
          <AiOutlineEdit size={FontSize.l} color={Colors.darkGray} onClick={toggleEditMode} cursor="pointer" />
          <AiOutlineDown size={FontSize.l} color={Colors.darkGray} cursor="pointer" onClick={onSubmit} />
        </S.TitleIconWrapper>
      </S.TitleWrapper>
      <Input type="text" name="title" placeholder="title" value={title} onChange={onChangeTitle} />
      <TextArea name="content" placeholder="content" value={content} onChange={onChangeContent} />
    </Form>
  );
}

const S = {
  TitleWrapper: styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
  `,
  TitleIconWrapper: styled.div`
    display: flex;
    gap: 1rem;
  `,
};
