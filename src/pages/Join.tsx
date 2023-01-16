import Layout from '@components/templates/Layout';
import JoinForm from '@components/molecules/JoinForm';
import MyLink from '@components/atoms/MyLink';

export default function Join() {
  return (
    <Layout>
      <JoinForm />
      <MyLink to="/">{'로그인 >'}</MyLink>
    </Layout>
  );
}
