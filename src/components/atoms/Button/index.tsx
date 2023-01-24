import { ComponentProps } from 'react';
import * as S from './style';

export interface ButtonProps extends ComponentProps<'button'> {
  isActivate?: boolean;
  bgColor?: string;
}

export default function Button({ children, isActivate = true, ...props }: ButtonProps) {
  return (
    <S.Button {...props} isActivate={isActivate}>
      {children}
    </S.Button>
  );
}
