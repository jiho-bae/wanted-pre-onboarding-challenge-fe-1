### requirements

- 코드 일관성, 가독성, 함수분리, 컴포넌트설계, 코드퀄리티.
- 함수 컴포넌트 개발(react hooks)

### signup

- `auth/join`에 회원가입 기능 개발.
  - 최소 이메일, 비밀번호, 제출버튼.
- 이메일, 비밀번호 유효성검사
  - 이메일 : `@ .` 포함.
  - 비밀번호 : 8자이상
  - 이메일, 비밀번호 모두 입력, 조건 만족시 "제출버튼 활성화"
- 가입 api 호출, 올바른 응답 수신시 루트경로로 이동.
  - 응답토큰을 로컬스토리지 저장

### login

- `auth/login`에 로그인 기능 개발.
  - 최소 이메일, 비밀번호, 제출버튼.
- 이메일 비밀번호 유효성검사는 signup과 동일
- 로그인 api 호출, 올바른 응답 수신시 루트경로로 이동.
  - 응답토큰을 로컬스토리지 저장
  - 다음번에 로그인시 토큰 존재하면 루트경로로 리다이렉트
  - 토큰이 유효하지 않으면, 사용자에게 알리고 로그인페이지로 리다이렉트

### todo list

Todos CRUD

- 목록 / 상세영역으로 나눠 구현
- todo list
- add 버튼 -> 할일 추가 기능.
  - 추가할 폼 보여주고 + 추가하기 버튼
  - 서버로 add 요청 보내고, id가 필요하므로 프론트에서 서버 응답을 받아 todo 추가.
- edit 버튼 -> 해당 todo를 수정모드 활성화
  - 내용 수정 후 제출버튼
  - 작업 취소시 취소버튼
  - 서버로 put 요청 보내고, 프론트에서는 임의로 todo 변경.(아이디 유지)
- delete 버튼 -> 해당 todo를 삭제할 것
  - "정말 삭제하겠습니까?" 정도의 경고
  - 한번 더 "예" 클릭시 삭제
  - 서버로 delete 요청 보내고, 프론트에서는 임의로 todo 삭제.

todo list & 개별 todo 상세 확인.

- 새로고침 시 현재 상태 유지
- 개별 todo 조회순서에 따라 페이지 뒤로가기로 조회하도록 지원.
- 한 페이지 내 새로고침없이 데이터 정합성

## server request

### Join, Login

```
  POST /users/create   || /users/login

  params : {
    email:'string',
    password:'string'
  }

  response:{
    message:"string",
    token:"string"
  }
```

### Todos

```
  공통
  Headers:{
    Authorization: token
  }

  GET /todos

  response:{
  "data": [
    {
      "title": "hi",
      "content": "hello",
      "id": "z3FGrcRL55qDCFnP4KRtn",
      "createdAt": "2022-07-24T14:15:55.537Z",
      "updatedAt": "2022-07-24T14:15:55.537Z"
    },
    {
      "title": "hi",
      "content": "hello",
      "id": "z3FGrcRL55qDCFnP4KRtn",
      "createdAt": "2022-07-24T14:15:55.537Z",
      "updatedAt": "2022-07-24T14:15:55.537Z"
    }
  ]
  }


  GET /todos/:id
  response : {
    "data": {
      "title": "hi",
      "content": "hello",
      "id": "z3FGrcRL55qDCFnP4KRtn",
      "createdAt": "2022-07-24T14:15:55.537Z",
      "updatedAt": "2022-07-24T14:15:55.537Z"
    }
  }

  POST /todos
  params:{
    title:string,
    content:string
  }

  response:{
  "data": {
    "title": "hi",
    "content": "hello",
    "id": "z3FGrcRL55qDCFnP4KRtn",
    "createdAt": "2022-07-24T14:15:55.537Z",
    "updatedAt": "2022-07-24T14:15:55.537Z"
  }
  }

  PUT /todos/:id
  params:{
    title:string,
    content:string
  }
  response:{
  "data": {
    "title": "hi",
    "content": "hello",
    "id": "z3FGrcRL55qDCFnP4KRtn",
    "createdAt": "2022-07-24T14:15:55.537Z",
    "updatedAt": "2022-07-24T14:15:55.537Z"
  }
  }

  DELETE /todos/:id
  {
    "data":null
  }
```
