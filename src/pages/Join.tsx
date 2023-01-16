import JoinForm from '@components/molecules/JoinForm';
import MyLink from '@components/atoms/MyLink';

export default function Join() {
  return (
    <div>
      <JoinForm />
      <MyLink to="/">{'로그인 >'}</MyLink>
    </div>
  );
}
