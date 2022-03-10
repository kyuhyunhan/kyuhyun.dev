import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import { MDXProvider } from '@mdx-js/react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import SyntaxHighlighter from 'react-syntax-highlighter';
import Layout from '@components/wiki/Layout';
import { H1, H2 } from '@styles/mdxStyles';

const mdxComponents = {
  h1: H1,
  h2: H2,
};

const WikiPage = ({ layoutInfo, mdxSource }: any) => {
  return (
    <Layout info={layoutInfo}>
      <MDXProvider components={mdxComponents}>
        <MDXRemote {...mdxSource} components={{ SyntaxHighlighter }} />
      </MDXProvider>
    </Layout>
  );
};
export default WikiPage;

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join('contents/wiki'));
  const paths = files.map((filename) => ({
    params: {
      page: filename.replace('.mdx', ''),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async ({ params: { page } }: any) => {
  const markdownWithMeta = fs.readFileSync(
    path.join('contents/wiki', page + '.mdx'),
    'utf-8'
  );
  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);
  return {
    props: {
      layoutInfo: frontMatter,
      page,
      mdxSource,
    },
  };
};
