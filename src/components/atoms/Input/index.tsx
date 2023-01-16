import { ComponentProps } from 'react';
import styled from '@emotion/styled';

import { FontSize, BorderRadius, Media } from '@src/styles';

const Input = styled.input`
  ${(_) => `
    display:block;
    width:100%;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: ${BorderRadius.s};
    border: none;
    font-size: ${FontSize.l};
    font-weight: 600;
    padding:5px;

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
`;

export interface InputProps extends ComponentProps<'input'> {}

export default Input;
