# JSON (JavaScript Object Notation)

## JSON이란

- `데이터 교환 형식`, 사람이 읽기 쉽고 기계가 해석하기 쉬운 구조
- JavaScript 객체 문법을 기반으로 하지만, 언어에 독립적이다. -> Python, Java, C 등 사용 가능
- 대다수의 Web API는 `JSON` 형식으로 데이터를 주고 받음. `.json` 확장자
- API 응답, 설정 파일 등에 활용
- 마지막 요소 뒤에는 `,` 붙이지 않는다! -> JSON 파싱 오류
- Key는 반드시 `""`로 구성된 문자열 형태
- JSON 기본 형식
  ```javascript
  {
    "name": "John",
    "age": 30,
    "hobbies" : ["reading", "gaming"],
    "address": {
        "city": "Seoul",
        "zipcode": "12345"
    } // 문자열, 숫자, boolean, 배열, 객체 가능능
  }
  ```

## JSON 관련 메서드

### 1. JSON.stringify()

- 자바스크립트 객체 -> JSON 문자열 반환
- `직렬화`. 데이터를 쉽게 포장하는 과정

```javascript
const obj = {
  name: "sook",
  age: "15",
  city: "Seoul",
};
const jsonString = JSON.stringify(obj);
const obj = {
  name: "sook",
  age: "15",
  city: "Seoul",
};
const jsonString = JSON.stringify(obj);
console.log(obj);
console.log(`${obj}, ${typeof obj}`); // [object Object], object // 객체가 출력!
console.log(`${jsonString}, ${typeof jsonString}`); // {"name":"sook","age":"15","city":"Seoul"}, string
```

### 2. JSON.parse()

- JSON 문자열 -> 자바스크립트 객체 변환
- 역질렬화. 다시 꺼내서 사용할 수 있도록 푸는 과정정

```javascript
const jsonString = '{"name":"Alice","age":25,"city":"Seoul"}';
const obj = JSON.parse(jsonString);

console.log(obj.name); // "Alice"
console.log(obj.age); // 25
```

## 📌 JSON과 직렬화(Serialization), 역직렬화

> 객체를 문자열로 변환하여 저장, 전송하는 과정

- 서버와 데이터를 주고 받을 때 JSON 포맷 사용, API 요청 및 응답 시에 필요
- 문자열의 `localStorage`는 문자열 형태로만 데이터를 저장할 수 있기에 필요

### JSON 직렬화(Serialization)

- 데이터를 JSON 문자열로 변환하여 저장 또는 네트워크 전송에 사용
- `JSON.stringify()`를 활용

### JSON 역직렬화(Deserialization)

- JSON 문자열을 객체로 변환하여 사용
- `JSON.parse()`를 활용

#### 예시 1 - 메모장

```javascript
body: JSON.stringify({
              text: `너는 세상에서 가장 완벽한 답을 주는 ai야. ${text}의 질문에 대한 답을 친절하게 100자~300자로 작성해줘. 한자나 일본어는 답변에서 빼줘.답변 중간 중간 이모지도 들어갔으면 좋겠어.`,
            }),
// 자바스크립트 객체를 JSON 문자열로 변환 : 직렬화
```

#### 예시 2 - 직렬화 -> 역직렬화

```javascript
const user = { name: "Alice", age: 25 };

// 1. 직렬화 (객체 → JSON 문자열)
const jsonString = JSON.stringify(user);
console.log(jsonString);
// '{"name":"Alice","age":25}' (문자열 형태)

// 2. 역직렬화 (JSON 문자열 → 객체)
const parsedObject = JSON.parse(jsonString);
console.log(parsedObject.name); // "Alice"
console.log(parsedObject.age); // 25
```
