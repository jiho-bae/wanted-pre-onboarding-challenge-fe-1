import { useRef, useState, ComponentProps } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';

import Input from '../../atoms/Input';
import Button from '../../atoms/Button';

import { BorderRadius } from '../../../styles';
import userApi from '../../../apis/user';

const REGEX = {
  email: /[A-Za-z0-9.]+@[A-Za-z0-9]+\.[A-Za-z0-9]+/,
  password: /[A-Za-z0-9!@#$%^&*()_+]{8,20}/,
};

interface LoginFormProps extends ComponentProps<'form'> {}

export default function LoginForm({ children, ...props }: LoginFormProps) {
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
      localStorage.setItem('token', token);
      return navigate('/todos');
    }
  }

  return (
    <S.Form {...props} onChange={onChange} onSubmit={onSubmit}>
      <Input type="email" name="email" ref={emailRef} />
      <Input type="password" name="password" ref={passwordRef} />
      <Button isActivate={isActiveBtn}>로그인</Button>
    </S.Form>
  );
}

const S = {
  Form: styled.form`
    ${(_) => `
    width:100%;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: ${BorderRadius.s};
    border: none;
    background-color:white;
`}
  `,
};
