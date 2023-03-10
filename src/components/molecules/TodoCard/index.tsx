import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';

import EditTodoForm from '@components/molecules/EditTodoForm';
import ContentTitle from '@components/molecules/ContentTitle';
import Card from '@components/atoms/Card';
import Text from '@components/atoms/Text';

import todoApi from '@apis/todo';
import { useToggle } from '@src/hooks';
import { Colors, FontSize } from '@src/styles';
import { TodoType } from '@src/types';

interface TodoCardProps extends React.ComponentProps<'li'> {
  todo: TodoType;
  updateTodo: (todo: TodoType) => void;
  deleteTodo: (id: string) => void;
}

export default function TodoCard({ updateTodo, deleteTodo, todo, ...props }: TodoCardProps) {
  const [isEditMode, toggleEditMode] = useToggle();
  const { id, title, content } = todo;

  function onClickDeleteTodo() {
    const isRealDelete = window.confirm('정말로 삭제하실 건가요?');
    if (!isRealDelete) return;

    todoApi.delete({ id });
    deleteTodo(id);
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
                <AiOutlineDelete
                  size={FontSize.l}
                  color={Colors.darkGray}
                  onClick={onClickDeleteTodo}
                  cursor="pointer"
                />
              </>
            }
          />
          <Text>{content}</Text>
        </>
      )}
    </Card>
  );
}
