import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Form from '@components/atoms/Form';
import Input from '@components/atoms/Input';
import Button from '@components/atoms/Button';

import userApi from '@apis/user';
import storage from '@libs/storage';
import { REGEX } from '@libs/constant';

export default function LoginForm() {
  const [isActiveBtn, setIsActiveBtn] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  function onChange() {
    const isNotRef =
      !(emailRef.current instanceof HTMLInputElement) || !(passwordRef.current instanceof HTMLInputElement);
    if (isNotRef) return;

    const { value: email } = emailRef.current;
    const { value: password } = passwordRef.current;

    const isSatisfiedRegex = REGEX.email.test(email) && REGEX.password.test(password);
    setIsActiveBtn(() => isSatisfiedRegex);
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isActiveBtn) return;

    const isNotRef =
      !(emailRef.current instanceof HTMLInputElement) || !(passwordRef.current instanceof HTMLInputElement);
    if (isNotRef) return;

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const {
      data: { token },
    } = await userApi.login({ email, password });

    if (token) {
      storage.setToken(token);
      return navigate('/todos');
    }
  }

  return (
    <Form onChange={onChange} onSubmit={onSubmit}>
      <Input type="email" name="email" placeholder="email" ref={emailRef} />
      <Input type="password" name="password" placeholder="password" ref={passwordRef} />
      <Button isActivate={isActiveBtn}>로그인</Button>
    </Form>
  );
}
