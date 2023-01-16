import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

import { Colors, FontSize } from '@src/styles';

const MyLink = styled(Link)`
  ${(_) => `
    width:100%;
    display:flex;
    justify-content:center;
    font-size: ${FontSize.m};
    font-weight: 600;
    color:${Colors.react};
    text-decoration:none;
    &:hover{
      color:${Colors.white};
    }
`}
`;

export default MyLink;
