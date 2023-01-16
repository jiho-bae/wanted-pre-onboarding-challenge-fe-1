import { ComponentProps } from 'react';
import styled from '@emotion/styled';

import { BorderRadius } from '@src/styles';

interface FormProps extends ComponentProps<'form'> {}

export default function Form({ children, ...props }: FormProps) {
  return <S.Form {...props}>{children}</S.Form>;
}

const S = {
  Form: styled.form`
    ${(_) => `
    width:100%;
    display:flex;
    flex-direction:column;
    gap:1rem;
    border-radius: ${BorderRadius.s};
    border: none;
    background-color:transparent;
    `}
  `,
};
