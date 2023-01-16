import LoginForm from '@components/molecules/LoginForm';
import MyLink from '@src/components/atoms/MyLink';

export default function Home() {
  return (
    <div>
      <LoginForm />
      <MyLink to="/auth/join">{'회원가입 >'}</MyLink>
    </div>
  );
}
