import styled from '@emotion/styled';
import { BorderRadius, Colors, Media } from '@src/styles';

interface CardProps extends React.ComponentProps<'li'> {
  bgColor?: string;
}

export default function Card({ children, ...props }: CardProps) {
  return <S.Container {...props}>{children}</S.Container>;
}

const S = {
  Container: styled.li<CardProps>`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: ${BorderRadius.s};
    padding: 1rem 1.5rem;
    gap: 0.5rem;

    ${({ bgColor }) => `
      background-color:${bgColor ?? Colors.white};
    `}

    @media ${Media.s} {
      min-height: 4rem;
    }
    @media ${Media.m} {
      min-height: 5rem;
    }
    @media ${Media.l} {
      min-height: 6rem;
    }
  `,
};
