(updated.220315)

# To do

- ~~Headless UI 위키 작성~~
- 작업 안한 페이지 표시
- 홈 콘텐츠 (위키, 블로그 각각 최신 5개정도 리스팅?)
- 최종 수정일을 실제 작업 커밋일자(?) 에 맞추어 자동 세팅되도록
- 위키 페이지 마크다운 스타일 수정
  <br/>
- 위키 리스트 페이지 최종 수정일 순서대로 리스팅
- 위키 아이디 자동 셋팅값으로 변경

# 구상 중인 기능, 형태

- 검색 기능
- 위키 내부 디렉토리는 만들지 말자. 태그로 분류 (태그를 신중하게)
  - 태그별로 조회할 수 있는 필터링 기능

### 위키 주제로 쓸만한 것

- ~~CSS 3D~~
- CSS Animation
- ~~JS event delegation~~
- JS scroll event
- this
  - [this는 어렵지 않습니다](https://blueshw.github.io/2018/03/12/this/)
- Set
  - [Understanding Map and Set in JavaScript](https://www.taniarascia.com/understanding-map-and-set-javascript/)
- Currying
- Throttle & Debounce
- console.log
  - [Use console.log() like a pro](https://markodenic.com/use-console-log-like-a-pro/)
- Bubbling & Capturing

  - [React: Event Bubbling and Capturing](https://www.robinwieruch.de/react-event-bubbling-capturing/)

- POP (protocol oriented programming)

### 커밋 형식

- \[WIP\] (선택사항)
- \[작업종류\]
  - pub: 위키, 포스팅 첫번째 발행
  - edit: 위키, 포스팅 수정
  - feat: 기능 추가
  - fix: 기능, 스타일링 수정
  - test: 테스트
- \[작업항목\] (작업종류가 pub, wiki인 경우)
  - wiki: 위키
  - blog: 블로그
- \[id\] (작업종류가 pub, wiki인 경우)
- 경로 (작업종류가 pub, wiki인 경우)
- 작업내용 (작업종류가 feat, fix인 경우)

ex1. 위키 첫 발행

- \[pub\]\[wiki\]\[w0001\]headless-ui-component

ex2. 기능 추가 작업중

- \[WIP\]\[feat\]검색기능 추가
