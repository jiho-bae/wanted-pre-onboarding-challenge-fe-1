import { ComponentProps } from 'react';
import styled from '@emotion/styled';

import { FontSize, BorderRadius } from '@src/styles';

const Input = styled.input`
  ${(_) => `
    display:block;
    width:100%;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: ${BorderRadius.s};
    border: none;
    font-size: ${FontSize.m};
    font-weight: 600;
`}
`;

export interface InputProps extends ComponentProps<'input'> {}

export default Input;
