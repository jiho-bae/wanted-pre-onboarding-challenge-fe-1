import { useCallback, useEffect, useState } from 'react';

import todoApi from '@src/apis/todo';
import { TodoType } from '@src/types';

export default function useTodos(
  initialState = []
): [TodoType[], (todo: TodoType) => void, (todo: TodoType) => void, (id: string) => void] {
  const [todos, setTodos] = useState<TodoType[]>(initialState);

  const addTodo = useCallback((todo: TodoType) => {
    setTodos((prevTodos) => [...prevTodos, { ...todo }]);
  }, []);

  const updateTodo = useCallback(({ id, title, content }: TodoType) => {
    setTodos((prevTodos) => {
      const newTodos = [...prevTodos];
      const targetIdx = newTodos.findIndex((todo) => todo.id === id);
      newTodos[targetIdx] = { ...newTodos[targetIdx], title, content };

      return newTodos;
    });
  }, []);

  const deleteTodo = useCallback((id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }, []);

  const initTodos = async () => {
    const {
      data: { data: newTodos },
    } = await todoApi.getTodos();

    setTodos(newTodos);
  };

  useEffect(() => {
    initTodos();
  }, []);

  return [todos, addTodo, updateTodo, deleteTodo];
}
