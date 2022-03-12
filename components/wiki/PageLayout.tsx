import styled from 'styled-components';

import Tags from '@components/wiki/Tags';

const StyledPageLayout = styled.article`
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
      & > .date {
        margin: 0;
      }
    }
  }
`;

function PageLayout({
  info: { title, subTitle, firstPublishedOn, lastEditedOn, tags, location },
  children,
}: WithChildren<{ info: FrontMatter }>) {
  function handleHistoryView() {
    window.open(
      `https://github.com/kyuhyunhan/kyuhyun.dev/blame/main/contents/wiki/${location}.mdx`
    );
  }
  return (
    <StyledPageLayout>
      <header>
        <h1 className="title">{title}</h1>
        <h2 className="subTitle">{subTitle}</h2>

        <Tags tags={tags} />

        <div className="dates">
          <p className="date">최초 작성일: {firstPublishedOn}</p>
          <p className="date">최종 수정일: {lastEditedOn}</p>
          <button onClick={handleHistoryView}>view history</button>
        </div>
      </header>
      <div>{children}</div>
      <footer>목록으로</footer>
    </StyledPageLayout>
  );
}
export default PageLayout;
