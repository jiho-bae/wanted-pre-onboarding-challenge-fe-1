import styled from '@emotion/styled';

import Title from '@components/atoms/Title';

import { Colors, FontSize, FontWeight } from '@src/styles';

interface ContentTitleProps extends React.ComponentProps<'div'> {
  title?: string;
  titleColor?: string;
  titleSize?: string;
  rightTabs?: JSX.Element | string;
}

export default function ContentTitle({
  title = '',
  titleColor = Colors.darkGray,
  titleSize = FontSize.l,
  rightTabs = '',
}: ContentTitleProps) {
  return (
    <S.TitleWrapper>
      <Title color={titleColor} fontWeight={FontWeight.bold} fontSize={titleSize}>
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
    align-items: center;
  `,
  TabWrapper: styled.div`
    display: flex;
    gap: 1rem;
  `,
};
