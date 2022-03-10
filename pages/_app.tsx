import type { AppProps } from 'next/app';
import { MDXProvider } from '@mdx-js/react';
import GlobalStyle from '@styles/GlobalStyle';
import Layout from '@components/layout';
import { H1 } from '@styles/mdxStyles';

const mdxComponents = {
  h1: H1,
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <MDXProvider components={mdxComponents}>
          <Component {...pageProps} />
        </MDXProvider>
      </Layout>
    </>
  );
}

export default MyApp;
