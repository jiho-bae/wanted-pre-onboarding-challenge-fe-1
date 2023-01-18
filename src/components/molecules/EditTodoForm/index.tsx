import { AiOutlineDown, AiOutlineRollback } from 'react-icons/ai';

import ContentTitle from '@components/molecules/ContentTitle';
import Form from '@components/atoms/Form';
import Input from '@components/atoms/Input';
import TextArea from '@components/atoms/TextArea';

import todoApi from '@apis/todo';
import { TodoType } from '@src/types';
import { Colors, FontSize } from '@src/styles';
import { useText } from '@src/hooks';

interface EditTodoFormProps {
  todo: TodoType;
  toggleEditMode: () => void;
  updateTodo: (todo: TodoType) => void;
}

export default function EditTodoForm({ updateTodo, toggleEditMode, todo }: EditTodoFormProps) {
  const [title, onChangeTitle] = useText(todo.title);
  const [content, onChangeContent] = useText(todo.content);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!title || !content) return;

    if (todo.title !== title || todo.content !== content) {
      todoApi.update({ id: todo.id, title, content });
      updateTodo({ ...todo, title, content });
    }
    toggleEditMode();
  }

  return (
    <Form onSubmit={onSubmit}>
      <ContentTitle
        rightTabs={
          <>
            <AiOutlineRollback size={FontSize.l} color={Colors.darkGray} onClick={toggleEditMode} cursor="pointer" />
            <AiOutlineDown size={FontSize.l} color={Colors.darkGray} cursor="pointer" onClick={onSubmit} />
          </>
        }
      />
      <Input type="text" name="title" placeholder="title" value={title} onChange={onChangeTitle} />
      <TextArea name="content" placeholder="content" value={content} onChange={onChangeContent} />
    </Form>
  );
}
