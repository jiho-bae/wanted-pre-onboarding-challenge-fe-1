import { ComponentProps } from 'react';
import styled from '@emotion/styled';

interface LayoutProps extends ComponentProps<'div'> {}

export default function Layout({ children, ...props }: LayoutProps) {
  return (
    <S.Container>
      <S.ContentContainer {...props}>{children}</S.ContentContainer>
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 32rem;
    max-width: 76rem;
    margin: 0 auto;
  `,

  ContentContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    padding-top: 4rem;
  `,
};
