import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

import { Colors, FontSize, Media } from '@src/styles';

interface LinkProps extends React.ComponentProps<'div'> {
  link: string;
}

function MyLink({ children, link, ...props }: LinkProps) {
  return (
    <S.Wrapper {...props}>
      <S.Link to={link}>{children}</S.Link>
    </S.Wrapper>
  );
}

const S = {
  Wrapper: styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  Link: styled(Link)`
    ${(_) => `
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${FontSize.l};
    font-weight: 600;
    color:${Colors.react};
    text-decoration:none;
    &:hover{
      color:${Colors.white};
    }

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

export default MyLink;
