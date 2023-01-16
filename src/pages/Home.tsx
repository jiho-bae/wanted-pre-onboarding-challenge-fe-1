import Layout from '@components/templates/Layout';
import LoginForm from '@components/molecules/LoginForm';
import MyLink from '@components/atoms/MyLink';
import Title from '@components/atoms/Title';

import { FontSize, FontWeight } from '@src/styles';

export default function Home() {
  return (
    <Layout>
      <Title fontSize={FontSize.xl} fontWeight={FontWeight.bold}>
        접속하기
      </Title>
      <LoginForm />
      <MyLink link="/auth/join">{'회원가입 >'}</MyLink>
    </Layout>
  );
}
