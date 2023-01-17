import { useRef } from 'react';

import Form from '@components/atoms/Form';
import Input from '@components/atoms/Input';
import TextArea from '@components/atoms/TextArea';
import Button from '@components/atoms/Button';

import todoApi from '@apis/todo';
import { TodoType } from '@src/types';

interface AddTodoFormProps {
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
}

export default function AddTodoForm({ setTodos }: AddTodoFormProps) {
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    const isNotRef =
      !(titleRef.current instanceof HTMLInputElement) || !(contentRef.current instanceof HTMLTextAreaElement);
    if (isNotRef) return;

    const title = titleRef.current.value;
    const content = contentRef.current.value;

    const {
      data: { date: todo },
    } = await todoApi.create({ title, content });

    setTodos((prevTodos) => [...prevTodos, { ...todo }]);
  }

  return (
    <Form onSubmit={onSubmit}>
      <Input type="text" name="title" placeholder="title" ref={titleRef} />
      <TextArea name="content" placeholder="content" ref={contentRef} />
      <Button>추가</Button>
    </Form>
  );
}
