# SSR (Server Side Rendering) : https://web.dev/i18n/ko/stale-while-revalidate/

- 일부 블로그, 홈페이지 웹사이트, PHP/JAVA 서버 사이트 템플릿 엔진
- 완성된 HTML(서버측에서 완성된 HTML을 전달해준다.)
- 화면 깜빡임이 있음, 초기 용량 작음
- 서버 부하 위험(사용자가 많은경우 html을 서버에서 랜더링 하기 떄문에 부하 위험이 있다.), 보안 유리
- SEO에 좋다(완성된 html덕에 크롤링하기가 좋아 검색엔진 노출에 유리하다.)

## 언제 사용하는게 좋을까?

1. SSR은 request time에 pre-rendering 된다.
   SSG에 비해 사용자 경험이 좋지않기 때문에 반드시 request time마다
   서버사이드에서 랜더링 해야하는 페이지에만 적용해야 한다.
   ex) 사용자의 인증정보에 따라 변하는 페이지, 페이지가 동적으로 변해야 하지만 보안적으로
   중요한 페이지에 적용하는 것이 좋다.

2. URL query parameter 가 page props로 반드시 필요한 경우에도 getServerSideProps를 사용할 수 있다.
