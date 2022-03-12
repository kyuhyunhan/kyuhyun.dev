import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import type { NextPage } from 'next';
import Link from 'next/link';

const Wiki: NextPage<{
  pages: {
    frontMatter: FrontMatter;
    path: string;
  }[];
}> = ({ pages }) => {
  return (
    <div>
      {pages.map((page: any, index: any) => (
        <Link href={'/wiki/' + page.path} passHref key={index}>
          <article>
            <p>{page.frontMatter.title}</p>
            <p>{page.frontMatter.description}</p>
            <p>
              <small>{page.frontMatter.date}</small>
            </p>
          </article>
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
