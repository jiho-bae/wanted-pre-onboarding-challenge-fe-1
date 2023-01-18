import styled from '@emotion/styled';
import { Colors, FontSize, FontWeight } from '@src/styles';

export interface TextProps extends React.ComponentProps<'span'> {
  color?: string;
  fontSize?: string;
  fontWeight?: number;
}

export default function Text({ children, ...props }: TextProps) {
  return <S.Text {...props}>{children}</S.Text>;
}

const S = {
  Text: styled.span<TextProps>`
    white-space: pre-wrap;
    color: ${({ color }) => color};
    font-size: ${({ fontSize }) => fontSize};
    font-weight: ${({ fontWeight }) => fontWeight};
  `,
};

const defaultProps: TextProps = {
  color: Colors.darkGray,
  fontSize: FontSize.m,
  fontWeight: FontWeight.base,
};

Text.defaultProps = defaultProps;
