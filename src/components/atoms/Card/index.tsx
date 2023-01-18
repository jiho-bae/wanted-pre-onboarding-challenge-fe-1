import styled from '@emotion/styled';
import { BorderRadius, Media } from '@src/styles';

interface CardProps extends React.ComponentProps<'li'> {}

export default function Card({ children, ...props }: CardProps) {
  return <S.Container {...props}>{children}</S.Container>;
}

const S = {
  Container: styled.li`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: ${BorderRadius.s};
    padding: 5px;

    @media ${Media.s} {
      height: 6rem;
    }
    @media ${Media.m} {
      height: 8rem;
    }
    @media ${Media.l} {
      height: 10rem;
    }
  `,
};
