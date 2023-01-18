import { useCallback, useState } from 'react';

type TextTypes = HTMLInputElement | HTMLTextAreaElement;

export default function useText<T extends TextTypes>(
  initialValue = ''
): [string, (e: React.ChangeEvent<T>) => void, () => void] {
  const [text, setText] = useState(initialValue);

  const onChange = useCallback((e: React.ChangeEvent<T>) => {
    setText(e.target.value);
  }, []);
  const onReset = useCallback(() => setText(''), []);

  return [text, onChange, onReset];
}
