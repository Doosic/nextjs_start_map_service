# 윈도우 프로세스 강제 종료

- 포트번호로 실행중인 프로세스 찾기
  netstat -ano |findstr 3000

- 포트 강제종료
  taskkill /f /pid 1234

  /f : 프로세스를 강제로 종료하도록 지정
  /t : 지정된 프로세스와 그 프로세스로부터 시작된 모든 자식 프로세스를 종료
