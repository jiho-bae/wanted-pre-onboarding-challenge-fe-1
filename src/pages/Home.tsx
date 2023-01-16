import Layout from '@components/templates/Layout';
import LoginForm from '@components/molecules/LoginForm';
import MyLink from '@components/atoms/MyLink';

export default function Home() {
  return (
    <Layout>
      <LoginForm />
      <MyLink to="/auth/join">{'회원가입 >'}</MyLink>
    </Layout>
  );
}
