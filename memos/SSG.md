# SSG (Static Site Generation)

1. pre-rendering: Static한 HTML을 build time에 미리 만들어 둔다.(SSR은 request time에)
2. 서버부하 없음, HTML 캐시 가능(Vercel에서 캐시), SEO에 좋다
3. 정적인 사이트(내용물이 변하지 않는 사이트)에 사용된다.

## 언제 사용하는게 좋을까?

1.정적인 사이트(내용물이 변하지 않는 사이트)

## 어떻게 SSG방식으로 렌더링 되게 하는가?

1. getStaticProps() 함수를 사용하여 필요한 데이터를 build time에 불러오게한다.

## getStaticProps() 함수는 무슨 역할을 하는가?

ISR(Incremental Static Regeneration)을 사용하면 전체 사이트를 재구축할 필요 없이 페이지별로 정적 생성을 사용할 수 있습니다.

## getStaticProps(): revalidate Option

서버에서 request를 받은지 일정 시간이 지난 후, 다시 request가 왔을 때마다 이 함수를 실행한다.
만약 데이터가 바뀌었다면 새로운 데이터로 다시 pre_rendering 한다.
데이터가 이전과 같다면 캐시된 데이터를 다시 사용한다.
ex) revalidate: 5 일시 5초마다 request를 확인하여 데이터가 바뀌었다면 새로운 데이터로 pre_rendering 한다.
