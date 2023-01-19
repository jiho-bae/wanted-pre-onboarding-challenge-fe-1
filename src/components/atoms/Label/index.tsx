import { ComponentProps } from 'react';
import styled from '@emotion/styled';

interface LabelProps extends ComponentProps<'label'> {}

export default function Label({ children, ...props }: LabelProps) {
  return <S.Label {...props}>{children}</S.Label>;
}

const S = {
  Label: styled.label`
    ${(_) => `
    width:100%;
    `}
  `,
};
