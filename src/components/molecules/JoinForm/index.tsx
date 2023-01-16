import { useRef, useState, ComponentProps } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';

import Input from '@components/atoms/Input';
import Button from '@components/atoms/Button';

import { BorderRadius } from '@src/styles';
import userApi from '@apis/user';
import { REGEX } from '@libs/constant';

interface JoinFormProps extends ComponentProps<'form'> {}

export default function JoinForm({ children, ...props }: JoinFormProps) {
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

    const isNotRef =
      !(emailRef.current instanceof HTMLInputElement) ||
      !(passwordRef.current instanceof HTMLInputElement) ||
      !(passwordConfirmRef.current instanceof HTMLInputElement);
    if (isNotRef) return;

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const passwordConfirm = passwordConfirmRef.current.value;

    if (password !== passwordConfirm) return;

    const {
      data: { token },
    } = await userApi.signUp({ email, password });

    if (token) {
      localStorage.setItem('token', token);
      return navigate('/todos');
    }
  }

  return (
    <S.Form {...props} onChange={onChange} onSubmit={onSubmit}>
      <Input type="email" name="email" ref={emailRef} />
      <Input type="password" name="password" ref={passwordRef} />
      <Input type="password" name="passwordConfirm" ref={passwordConfirmRef} />
      <Button isActivate={isActiveBtn}>회원가입</Button>
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
