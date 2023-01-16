import styled from '@emotion/styled';

interface GapProps extends React.ComponentProps<'div'> {
  size: string;
}

export default function Gap({ ...props }: GapProps) {
  return <S.Gap {...props} />;
}

const S = {
  Gap: styled.div<GapProps>`
    ${({ size }) => `
        width:${size};
        height:${size};
    `}
  `,
};
