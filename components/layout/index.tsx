import Link from 'next/link';
import styled from 'styled-components';

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
  & > h1 > a {
    &:hover {
      color: inherit;
    }
  }
  & > nav {
    display: flex;
    justify-content: space-between;
    width: 40%;
  }
`;
const StyledMain = styled.main``;

function Header() {
  return (
    <StyledHeader>
      <h1>
        <Link href="/">Kyuhyun.dev</Link>
      </h1>
      <nav>
        <Link href="/wiki">wiki</Link>
        <Link href="/blog">blog</Link>
        <Link href="/about">abountMe</Link>
      </nav>
    </StyledHeader>
  );
}
type MainProps = WithChildren;
function Main({ children }: MainProps) {
  return <StyledMain>{children}</StyledMain>;
}

type LayoutProps = WithChildren;
function Layout({ children }: LayoutProps) {
  return (
    <StyledLayout>
      <Header />
      <Main>{children}</Main>
    </StyledLayout>
  );
}
export default Layout;
