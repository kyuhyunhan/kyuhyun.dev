import type { NextPage } from 'next';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import styled from 'styled-components';
import THEME from '@constants/theme';
// test
const HomePage: NextPage<{
  pages: WithFrontMatter<{ path: string }>[];
}> = ({ pages }) => {
  return (
    <StyledHomePage>
      <section className="wiki">
        <div className="header">
          <h1 className="title">Wiki</h1>
          <Link href="/wiki">
            <a className="link">&gt; 전체 보기</a>
          </Link>
        </div>
        <ul>
          {pages.map((page: WithFrontMatter<{ path: string }>, i: number) => (
            <Link href={'/wiki/' + page.path} passHref key={i}>
              <a>
                <li>
                  <h3 className="title">{page.frontMatter.title}</h3>
                  <p className="subTitle">{page.frontMatter.subTitle}</p>
                </li>
              </a>
            </Link>
          ))}
        </ul>
      </section>
      <section className="blog">
        <h1 className="title">Blog</h1>
      </section>
    </StyledHomePage>
  );
};

export default HomePage;

export const getStaticProps = async () => {
  const rootFiles = fs
    .readdirSync(path.join('contents/wiki'))
    .filter((fileName) => {
      return !fs.statSync(`contents/wiki/${fileName}`).isDirectory();
    });
  const rootPages = rootFiles.map((filename) => {
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
  const cssFiles = fs.readdirSync(path.join('contents/wiki/css'));
  const cssPages = cssFiles.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join('contents/wiki/css', filename),
      'utf-8'
    );

    const { data: frontMatter } = matter(markdownWithMeta);
    return {
      frontMatter,
      path: `css/${filename.split('.')[0]}`,
    };
  });
  const jsFiles = fs.readdirSync(path.join('contents/wiki/js'));
  const jsPages = jsFiles.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join('contents/wiki/js', filename),
      'utf-8'
    );

    const { data: frontMatter } = matter(markdownWithMeta);
    return {
      frontMatter,
      path: `js/${filename.split('.')[0]}`,
    };
  });

  const pages = [...rootPages, ...cssPages, ...jsPages];
  pages.sort((a, b) => {
    return (
      Date.parse(b.frontMatter.lastEditedOn) -
      Date.parse(a.frontMatter.lastEditedOn)
    );
  });
  return {
    props: {
      pages,
    },
  };
};

const StyledHomePage = styled.div`
  & .wiki {
    margin-bottom: 3rem;
    & .header {
      display: flex;
      & .title {
        margin-right: auto;
      }
      & .link {
        align-self: center;
        &:hover {
          color: ${THEME.COLOR.main};
        }
      }
      border-bottom: 1px solid ${THEME.COLOR.gray.dark};
    }
    & ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    & li {
      display: flex;
      border-bottom: 1px solid ${THEME.COLOR.gray.light};
      & .title {
        margin-right: auto;
      }
      & .subTitle {
        color: ${THEME.COLOR.gray.dark};
        align-self: center;
      }
      &:hover {
        color: ${THEME.COLOR.main};
      }
    }
  }
`;
