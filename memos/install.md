# Next.js 기본 셋팅방법

- 해당 명령어를 이용하여 Next.js 설치
  npx create-next-app@latest --typescript

- 아래의 라이브러리가 설치되어있지 않다면 설치
  "eslint-config-next": "13.2.2" 자동으로 next.js 만의 룰이 설정되어있다.

- 프리티어 설치
  yarn add --dev --exact prettier

- 프리티어 설치시 esLint가 가지고있는 코드 포멧팅의 룰과 겹칠수 있기 떄문에
  "exlint-config-prettier" 라이브러리를 설치하여 충돌을 방지한다.
  yarn add --dev exlint-config-prettier
