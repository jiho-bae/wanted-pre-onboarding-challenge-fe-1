import Layout from '@components/templates/Layout';
import LoginForm from '@components/molecules/LoginForm';
import MyLink from '@components/atoms/MyLink';
import Title from '@components/atoms/Title';
import Gap from '@components/atoms/Gap';

import { Colors, FontSize, FontWeight, GapSize } from '@src/styles';
import { PATH } from '@libs/constant';

export default function Home() {
  return (
    <Layout>
      <Title fontSize={FontSize.xl} fontWeight={FontWeight.bold} color={Colors.react}>
        접속하기
      </Title>
      <Gap size={GapSize.l} />
      <LoginForm />
      <MyLink link={PATH.join}>{'회원가입 >'}</MyLink>
    </Layout>
  );
}
