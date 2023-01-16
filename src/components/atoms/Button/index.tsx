import { ComponentProps } from 'react';
import styled from '@emotion/styled';

import { FontSize, Colors, BorderRadius, Media } from '@src/styles';

const S = {
  Button: styled.button<ButtonProps>`
    ${({ isActivate }) => `
    width:100%;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: ${BorderRadius.s};
    border: none;
    font-size: ${FontSize.l};
    font-weight: 600;
    cursor: ${isActivate ? 'pointer' : 'cursor'};
    background-color : ${isActivate ? Colors.react : Colors.darkGray};
    color : ${isActivate ? Colors.darkGray : Colors.white};

    @media ${Media.s}{
      height:4rem;
    }
    @media ${Media.m}{
      height:5rem;
    }
    @media ${Media.l}{
      height:6rem;
    }
`}
  `,
};

interface ButtonProps extends ComponentProps<'button'> {
  isActivate: boolean;
}

export default function Button({ children, isActivate, ...props }: ButtonProps) {
  return (
    <S.Button {...props} isActivate={isActivate}>
      {children}
    </S.Button>
  );
}
