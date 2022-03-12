import Link from 'next/link';
import styled from 'styled-components';
import THEME from '@constants/theme';

function Header() {
  return (
    <StyledHeader>
      <h1>
        <Link href="/">
          <a>Kyuhyun.dev</a>
        </Link>
      </h1>
      <nav>
        <Link href="/wiki">
          <a>wiki</a>
        </Link>
        <Link href="/blog">
          <a>blog</a>
        </Link>
        <Link href="/about">
          <a>aboutMe</a>
        </Link>
      </nav>
    </StyledHeader>
  );
}
function Main({ children }: WithChildren) {
  return <StyledMain>{children}</StyledMain>;
}

function Layout({ children }: WithChildren) {
  return (
    <StyledLayout>
      <Header />
      <Main>{children}</Main>
    </StyledLayout>
  );
}
export default Layout;

const StyledLayout = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: 2.625rem 1.3125rem;
  max-width: 42rem;
  height: 100%;
  min-height: 100vh;
`;
const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.625rem;
  & > nav {
    display: flex;
    justify-content: space-between;
    width: 40%;
    & > a {
      &:hover {
        color: ${THEME.COLOR.main};
      }
    }
  }
`;

const StyledMain = styled.main``;
