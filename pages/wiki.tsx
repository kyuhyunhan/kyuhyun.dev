import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import type { NextPage } from 'next';
import Link from 'next/link';

const Wiki: NextPage<{
  pages: WithFrontMatter<{ path: string }>[];
}> = ({ pages }) => {
  return (
    <div>
      {pages.map((page: WithFrontMatter<{ path: string }>, i: number) => (
        <Link href={'/wiki/' + page.path} passHref key={i}>
          <a>
            <article>
              <p>{page.frontMatter.title}</p>
              <p>{page.frontMatter.subTitle}</p>
              {page.frontMatter.tags.map((tag: string, j: number) => {
                return <span key={j}>{tag}</span>;
              })}
            </article>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Wiki;

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('contents/wiki'));

  const pages = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join('contents/wiki', filename),
      'utf-8'
    );
    const { data: frontMatter } = matter(markdownWithMeta);
    console.log('###', frontMatter);
    return {
      frontMatter,
      path: filename.split('.')[0],
    };
  });
  return {
    props: {
      pages,
    },
  };
};
