import type { NextPage } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { MDXProvider } from '@mdx-js/react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import SyntaxHighlighter from 'react-syntax-highlighter';
import PageLayout from '@components/wiki/PageLayout';
import { mdxComponents } from '@utils';

const WikiPage: NextPage<
  WithFrontMatter<{ mdxSource: MDXRemoteSerializeResult }>
> = ({ frontMatter, mdxSource }) => {
  return (
    <PageLayout frontMatter={frontMatter}>
      <MDXProvider components={mdxComponents}>
        <MDXRemote {...mdxSource} components={{ SyntaxHighlighter }} />
      </MDXProvider>
    </PageLayout>
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
