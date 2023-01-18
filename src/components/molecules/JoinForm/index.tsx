import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Form from '@components/atoms/Form';
import Input from '@components/atoms/Input';
import Button from '@components/atoms/Button';

import userApi from '@apis/user';
import { REGEX } from '@libs/constant';
import storage from '@src/libs/storage';

export default function JoinForm() {
  const [isActiveBtn, setIsActiveBtn] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  function onChange() {
    const isNotRef =
      !(emailRef.current instanceof HTMLInputElement) ||
      !(passwordRef.current instanceof HTMLInputElement) ||
      !(passwordConfirmRef.current instanceof HTMLInputElement);
    if (isNotRef) return;

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const passwordConfirm = passwordConfirmRef.current.value;

    if (password !== passwordConfirm) return;

    const isSatisfiedRegex =
      REGEX.email.test(email) && REGEX.password.test(password) && REGEX.password.test(passwordConfirm);
    setIsActiveBtn(() => isSatisfiedRegex);
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isActiveBtn) return;
    if (!emailRef.current || !passwordRef.current || !passwordConfirmRef.current) return;

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const passwordConfirm = passwordConfirmRef.current.value;

    if (password !== passwordConfirm) return;

    const {
      data: { token },
    } = await userApi.signUp({ email, password });

    if (token) {
      storage.setToken(token);
      return navigate('/todos');
    }
  }

  return (
    <Form onChange={onChange} onSubmit={onSubmit}>
      <Input type="email" name="email" placeholder="email" ref={emailRef} />
      <Input type="password" name="password" placeholder="password" ref={passwordRef} />
      <Input type="password" name="passwordConfirm" placeholder="password confirm" ref={passwordConfirmRef} />
      <Button isActivate={isActiveBtn}>회원가입</Button>
    </Form>
  );
}
