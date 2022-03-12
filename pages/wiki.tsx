import type { NextPage } from 'next';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import styled from 'styled-components';
import THEME from '@constants/theme';

const Wiki: NextPage<{
  pages: WithFrontMatter<{ path: string }>[];
}> = ({ pages }) => {
  return (
    <>
      <header>
        <h1 className="description">최근 변경된 문서</h1>
      </header>
      <StyledWiki>
        {pages.map((page: WithFrontMatter<{ path: string }>, i: number) => (
          <Link href={'/wiki/' + page.path} passHref key={i}>
            <a>
              <li>
                <p className="lastEditedDate">
                  {page.frontMatter.lastEditedOn}
                </p>
                <p className="title">{page.frontMatter.title}</p>
                <p className="subTitle">{page.frontMatter.subTitle}</p>

                <p className="tags">
                  {page.frontMatter.tags.map((tag: string, j: number) => {
                    return (
                      <span className="tag" key={j}>
                        #{tag}
                      </span>
                    );
                  })}
                </p>
              </li>
            </a>
          </Link>
        ))}
      </StyledWiki>
    </>
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

const StyledWiki = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  & > header {
    & > .description {
      margin-block-start: 0.5em;
      margin-block-end: 0.5em;
      font-size: 1.5rem;
    }
  }
  & li {
    border-radius: 0.5em;
    padding: 0.3rem 1rem;
    margin: 0;
    margin-bottom: 3rem;
    transition: 0.2s;

    &:hover {
      background-color: ${THEME.COLOR.sub.transparentSkyblue};
      box-shadow: 0px 0px 7px ${THEME.COLOR.gray.light};
      color: ${THEME.COLOR.main};
    }
  }
  & .lastEditedDate {
    margin: 0;
    color: ${THEME.COLOR.gray.dark};
  }
  & .title {
    margin: 0.3rem 0;
    font-size: 1.3rem;
    font-weight: bold;
  }
  & .subTitle {
    margin: 0;
    color: #000;
  }

  & .tags {
    margin: 0;
    margin-top: 0.5rem;
    color: ${THEME.COLOR.gray.dark};
    & .tag {
      margin-right: 1rem;
    }
  }
`;
