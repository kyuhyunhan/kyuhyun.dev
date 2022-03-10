import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import type { NextPage } from 'next';
import Link from 'next/link';

const WikiPage: NextPage = ({ wikis }: any) => {
  return (
    <div className="mt-5">
      {wikis.map((post: any, index: any) => (
        <Link href={'/wiki/' + post.slug} passHref key={index}>
          <div style={{ maxWidth: '540px' }}>
            <div>
              <h5>{post.frontMatter.title}</h5>
              <p>{post.frontMatter.description}</p>
              <p>
                <small>{post.frontMatter.date}</small>
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default WikiPage;

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('contents/wiki'));

  const wikis = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join('contents/wiki', filename),
      'utf-8'
    );
    const { data: frontMatter } = matter(markdownWithMeta);
    return {
      frontMatter,
      slug: filename.split('.')[0],
    };
  });
  return {
    props: {
      wikis,
    },
  };
};
