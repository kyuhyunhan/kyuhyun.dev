import styled from 'styled-components';
import THEME from '@constants/theme';

export const H1 = styled.h1`
  font-size: 2.3rem;
`;
export const H2 = styled.h2`
  font-size: 1.8rem;
`;
export const H3 = styled.h3`
  font-size: 1.5rem;
`;
export const H4 = styled.h4``;
export const H5 = styled.h5``;

export const P = styled.p`
  margin-bottom: 1.75rem;
  font-size: 1rem;
  line-height: 1.75;
`;

export const LINK = styled.a`
  color: ${THEME.COLOR.main};
  &:hover {
    text-decoration: underline;
  }
`;
export const CODE = styled.code`
  padding: 0.15em 0.2em 0.05em;
  border-radius: 0.3em;
  background-color: ${THEME.COLOR.gray.light};
  white-space: normal;
`;

export const STRONG = styled.strong``;

// export const QUOTE = ({ children }: any) => {
//   return <blockquote>&ldquo;{children}&rdquo;</blockquote>;
// };
export const QUOTE = styled.blockquote`
  position: relative;
  margin: 0;
  & > p {
    font-size: 1.2rem;
    color: ${THEME.COLOR.gray.dark};
  }

  &:before {
    content: '';
    position: absolute;
    left: -1rem;
    width: 0.4em;
    height: 100%;
    background-color: ${THEME.COLOR.gray.dark};
  }
`;
