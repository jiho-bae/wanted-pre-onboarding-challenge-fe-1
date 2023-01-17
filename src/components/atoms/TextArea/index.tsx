import styled from '@emotion/styled';

import { FontSize, BorderRadius, Media } from '@src/styles';

const TextArea = styled.textarea`
  ${(_) => `
    display:block;
    width:100%;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: ${BorderRadius.s};
    border: none;
    font-size: ${FontSize.m};
    font-weight: 600;
    padding:5px;

    ::placeholder{
      font-size:${FontSize.m};
    }

    @media ${Media.s}{
      height:6rem;
    }
    @media ${Media.m}{
      height:8rem;
    }
    @media ${Media.l}{
      height:10rem;
    }
`}
`;

export default TextArea;
