import styled from 'styled-components';

import Tags from '@components/wiki/Tags';

const StyledLayout = styled.article`
  position: relative;

  & > header {
    & > .title {
      margin-block-start: 0.5em;
      margin-block-end: 0.5em;
      font-size: 2.5rem;
    }
    & > .subTitle {
      margin-block-start: 0.5em;
      margin-block-end: 0.5em;
    }
    & > .dates {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
  }
`;

interface Props {
  info: any;
  children: React.ReactNode;
}

function Layout({
  info: { title, subTitle, firstPublishedOn, lastEditedOn, tags, location },
  children,
}: Props) {
  console.log(location);
  return (
    <StyledLayout>
      <header>
        <h1 className="title">{title}</h1>
        <h2 className="subTitle">{subTitle}</h2>

        <Tags tags={tags} />

        <a
          className="dates"
          href={`https://github.com/kyuhyunhan/kyuhyun.dev/blame/main/contents/wiki/${location}.mdx`}
        >
          <div className="date">최초작성일: {firstPublishedOn}</div>
          <div className="date">최종수정일: {lastEditedOn}</div>
        </a>
      </header>
      <div>{children}</div>
      <footer>목록으로</footer>
    </StyledLayout>
  );
}
export default Layout;
