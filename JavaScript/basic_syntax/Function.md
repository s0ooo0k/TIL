# 함수와 매개 변수

- 함수 선언의 차이점을 잘 이해하자

## 함수 선언과 함수 표현식식

### 함수 선언(Function Declaration)

- 함수 선언은 `function`으로 독립적으로 정의
  => 이때까지 써왔던 일반적인 방식
- `호이스팅(hoisting)`되므로 정의 이전 호출 가능

```javascript
console.log(greet("sook")); // 호이스팅

function greet(name) {
  return `Hello, ${name}!`;
} // 함수 선언 방식
```

### 함수 표현식(Function Expression)

- 함수를 변수에 할당하는 방식
- **호이스팅 되지 않음**
- 변수에 할당되는 형태이기 때문에, `;`을 붙이는게 일반적

```javascript
const sayHi = function (name) {
  // 함수 표현식
  return `Hi, ${name}!`;
};

console.log(sayHi("sook")); // 선언 이후에 호출 가능
```

### 화살표 함수(Arrow Function)

[화살표 함수](./ArrowFunction.md) 문서 참조!

---

## 기본 변수와 나머지 매개변수

### 기본 매개변수

기본 매개변수를 사용하여, 함수 호출 시 인수가 전달되지 않았을 경우의 `기본값`을 정의할 수 있음

```javascript
function greet(name) {
  retunr`Hello, ${name}!`;
} // 기본값이 없음
console.log(greet()); // 출력 : Hello, undefined!

function defaultGreet(newName = "Guest") {
  return `Hello, ${newName}!`;
} // 기본 매개변수 사용, 기본값 설정
console.log(greet()); // 출력 : Hello, Guest!
```

### 나머지 매개변수

함수가 전달받은 인수들을 배열로 처리할 수 있게 함

```javascript
const introduce = function (first, second, ...others) {
  console.log(`첫 번째 사람: ${first}`);
  console.log(`두 번째 사람: ${second}`);
  console.log(`나머지 사람들: ${others.join(", ")}`);
};

introduce("Alice", "Bob", "Charile", "Dave");
// 출력
// 첫 번째 사람: Alice
// 두 번째 사람: Bob
// 나머지 사람들: Charile, Dave
```
