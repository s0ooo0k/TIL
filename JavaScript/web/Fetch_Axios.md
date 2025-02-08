# Fetch VS Axios

- API 요청 라이브러리 비교

## Fetch?

- `fetch()`는 JavaScript 내장 함수로 HTTP 요청을 보낼 때 사용
- `XMLHttpRequest`를 대체하며, 기본적으로 `Promise` 기반 - 비동기 처리 지원
- JSON 데이터 처리 시 용이
- 요청 및 응답 객체에 대한 세밀한 제어 가능

### Fetch API 기본 사용법

**CRUD와 HTTP Method**

- `Create` : 새로운 리소스 생성 - POST 메서드
- `Read` : 데이터 조회 - GET 메서드
- `Update` : 기존 데이터 수정 - PUT, PATCH 메서드
- `Delete` : 데이터 삭제 - DELETE 메서드

#### 예제 1) GET

```javascript
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => console.log("Users:", data))
  .catch((error) => console.error("Fetch error:", error));
```

1. `fetch()` 실행 : `GET 요청`
   - 서버에 HTTP GET 요청. (데이터 요청)
   - 비동기 실행, 서버의 응답을 Promise 객체로 반환
2. `response.ok`로 HTTP 응답 확인
   - `.json()`을 호출해 응답 데이터를 JSON으로 변환, Promise 반환
3. `.then`에서 변환된 JSON 데이터 활용
   +) `catch`로 에러 처리

#### 예제 2) POST

```javascript
const newUser = { name: "John Doe", email: "john@example.com" };

async function createUser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST", // 1️⃣ HTTP 요청 메서드를 POST로 설정
      headers: {
        "Content-Type": "application/json", // 2️⃣ JSON 형식의 데이터를 보내겠다고 명시
      },
      body: JSON.stringify(newUser),
    });

    const data = await response.json(); // 응답을 JSON으로 변환
    console.log("Created user:", data);
  } catch (error) {
    console.error("Error:", error);
  }
}

createUser();
```

1. `CreateUser()` 비동기로 실행
   - Promise 반환환
2. `POST`로 HTTP 요청, `newUser` 객체를 JSON 문자열로 반환(직렬화)
3. 서버 응답 대기(await fetch), response 시
4. response.json 실행 -> JSON 문자열을 객체로 변환(역직렬화)
5. console.log 실행

---

## Axios

- Promise 기반의 HTTP 클라이언트 라이브러리
- 브라우저, Node.js 환경 모두 지원
- 자동으로 요청 및 데이터를 JSON으로 변환
- 기본 설정, 인터셉터 기능 제공

```shell
npm install axios
```

#### 예제 1) GET

```javascript
axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then((response) => console.log("Users:", response.data))
  .catch((error) => console.error("Error:", error));
```

#### 예제 2) POST

```javascript
const newUser = { name: "John Doe", email: "john@example.com" };

axios
  .post("https://jsonplaceholder.typicode.com/users", newUser)
  .then((response) => console.log("Created user:", response.data))
  .catch((error) => console.error("Error:", error));
```

---

## Fetch VS Axios

### 비교해보자!

- **문법 간결성**
  - Fetch: 비교적 복잡한 구문 필요
  - Axios: 직관적이고 간결한 API 제공
- **자동 변환**
  - Fetch: 수동으로 `response.json()` 호출
  - Axios: JSON 데이터 자동 변환
- **에러 처리**
  - Fetch: HTTP 오류 상태를 수동 처리
  - Axios: HTTP 오류 상태를 자동으로 거부된 Promise로 처리
- **브라우저 지원**
  - Fetch: 일부 구형 브라우저에서 지원되지 않을 수 있음
  - Axios: 대부분의 브라우저에서 작동

### 사용 범위

- 간단한 API 요청 : `fetch()`
- JSON 변환, 에러 처리, 요청 취소 등 : `axios`
- React, Vue 등 프레임워크에서 API 요청 : `axios`
-
