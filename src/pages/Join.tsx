import Layout from '@components/templates/Layout';
import JoinForm from '@components/molecules/JoinForm';
import MyLink from '@components/atoms/MyLink';
import Title from '@components/atoms/Title';

import { FontSize, FontWeight } from '@src/styles';

export default function Join() {
  return (
    <Layout>
      <Title fontSize={FontSize.xl} fontWeight={FontWeight.bold}>
        가입하기
      </Title>
      <JoinForm />
      <MyLink link="/">{'로그인 >'}</MyLink>
    </Layout>
  );
}
