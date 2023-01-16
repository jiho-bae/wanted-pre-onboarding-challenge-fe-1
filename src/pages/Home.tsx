import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Input from '../components/atoms/Input';
import Button from '../components/atoms/Button';

import userApi from '../apis/user';

const REGEX = {
  email: /[A-Za-z0-9.]+@[A-Za-z0-9]+\.[A-Za-z0-9]+/,
  password: /[A-Za-z0-9!@#$%^&*()_+]{8,20}/,
};

export default function Home() {
  const [isActiveBtn, setIsActiveBtn] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  function onChangeForm() {
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
    <div>
      <form
        onChange={onChangeForm}
        onSubmit={onSubmit}
        style={{ width: '50%', display: 'flex', flexDirection: 'column' }}
      >
        <Input type="email" name="email" ref={emailRef} />
        <Input type="password" name="password" ref={passwordRef} />
        <Button isActivate={isActiveBtn}>로그인</Button>
      </form>
    </div>
  );
}
