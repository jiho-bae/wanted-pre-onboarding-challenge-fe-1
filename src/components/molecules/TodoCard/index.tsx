import Card from '@components/atoms/Card';
import Title from '@components/atoms/Title';
import styled from '@emotion/styled';
import { Colors, FontSize } from '@src/styles';

interface TodoCardProps extends React.ComponentProps<'li'> {
  title: string;
  content: string;
}

export default function TodoCard({ title, content, ...props }: TodoCardProps) {
  const contentChunk = content.split('\n');

  return (
    <Card {...props}>
      <Title color={Colors.darkGray}>{title}</Title>
      <S.P>
        {contentChunk.map((chunk, idx) => (
          <S.Span key={idx}>{chunk}</S.Span>
        ))}
      </S.P>
    </Card>
  );
}

const S = {
  P: styled.p`
    font-size: ${FontSize.m};
  `,
  Span: styled.span`
    display: block;
  `,
};
