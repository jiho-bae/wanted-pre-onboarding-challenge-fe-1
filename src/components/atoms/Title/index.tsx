import styled from '@emotion/styled';
import { Colors, FontSize, FontWeight } from '@src/styles';

export interface TitleProps extends React.ComponentProps<'h1'> {
  color?: string;
  fontSize?: string;
  fontWeight?: number;
}

export default function Title({ children, ...props }: TitleProps) {
  return <S.Title {...props}>{children}</S.Title>;
}

const S = {
  Title: styled.h1<TitleProps>`
    color: ${({ color }) => color};
    font-size: ${({ fontSize }) => fontSize};
    font-weight: ${({ fontWeight }) => fontWeight};
  `,
};

const defaultProps: TitleProps = {
  color: Colors.white,
  fontSize: FontSize.l,
  fontWeight: FontWeight.medium,
};

Title.defaultProps = defaultProps;
