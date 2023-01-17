import Layout from '@components/templates/Layout';
import JoinForm from '@components/molecules/JoinForm';
import MyLink from '@components/atoms/MyLink';
import Title from '@components/atoms/Title';
import Gap from '@components/atoms/Gap';

import { Colors, FontSize, FontWeight, GapSize } from '@src/styles';
import { PATH } from '@libs/constant';

export default function Join() {
  return (
    <Layout>
      <Title fontSize={FontSize.xl} fontWeight={FontWeight.bold} color={Colors.react}>
        가입하기
      </Title>
      <Gap size={GapSize.l} />
      <JoinForm />
      <MyLink link={PATH.home}>{'로그인 >'}</MyLink>
    </Layout>
  );
}
