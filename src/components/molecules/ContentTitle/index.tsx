import styled from '@emotion/styled';

import Title from '@components/atoms/Title';

import { Colors, FontWeight } from '@src/styles';

interface ContentTitleProps extends React.ComponentProps<'div'> {
  title?: string;
  rightTabs?: JSX.Element | string;
}

export default function ContentTitle({ title = '', rightTabs = '', ...props }: ContentTitleProps) {
  return (
    <S.TitleWrapper {...props}>
      <Title color={Colors.darkGray} fontWeight={FontWeight.bold}>
        {title}
      </Title>
      <S.TabWrapper>{rightTabs}</S.TabWrapper>
    </S.TitleWrapper>
  );
}

const S = {
  TitleWrapper: styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
  `,
  TabWrapper: styled.div`
    display: flex;
    gap: 1rem;
  `,
};
