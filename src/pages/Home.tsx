import { useRef, useState } from 'react';

const REGEX = {
  email: /[A-Za-z0-9.]+@[A-Za-z0-9]+\.[A-Za-z0-9]+/,
  password: /[A-Za-z0-9!@#$%^&*()_+]{8,20}/,
};

export default function Home() {
  const [isActiveBtn, setIsActiveBtn] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  function onChangeForm() {
    const isNotRef =
      !(emailRef.current instanceof HTMLInputElement) || !(passwordRef.current instanceof HTMLInputElement);
    if (isNotRef) return;

    const { value: email } = emailRef.current;
    const { value: password } = passwordRef.current;

    const isSatisfiedRegex = REGEX.email.test(email) && REGEX.password.test(password);
    setIsActiveBtn(() => isSatisfiedRegex);
  }

  return (
    <div>
      <form onChange={onChangeForm} style={{ width: '50%', display: 'flex', flexDirection: 'column' }}>
        <input type="email" name="email" ref={emailRef} />
        <input type="password" name="password" ref={passwordRef} />
        <button style={{ backgroundColor: `${isActiveBtn ? 'black' : 'white'}` }}>로그인</button>
      </form>
    </div>
  );
}
