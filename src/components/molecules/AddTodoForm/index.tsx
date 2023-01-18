import { useRef } from 'react';

import Form from '@components/atoms/Form';
import Input from '@components/atoms/Input';
import TextArea from '@components/atoms/TextArea';
import Button from '@components/atoms/Button';

import todoApi from '@apis/todo';
import { TodoType } from '@src/types';

interface AddTodoFormProps {
  addTodo: (todo: TodoType) => void;
}

export default function AddTodoForm({ addTodo }: AddTodoFormProps) {
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
      data: { data: todo },
    } = await todoApi.create({ title, content });

    addTodo(todo);
  }

  return (
    <Form onSubmit={onSubmit}>
      <Input type="text" name="title" placeholder="title" ref={titleRef} />
      <TextArea name="content" placeholder="content" ref={contentRef} />
      <Button>추가</Button>
    </Form>
  );
}
