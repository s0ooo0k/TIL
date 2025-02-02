# 화살표 함수(Arrow Function)

## 화살표 함수

- `function` 대신 `=>` 사용
- 호이스팅되지만, 변수 선언에 따라 접근 가능 여부가 다르다
  - `const`, `let` : 선언 이후에만 호출 가능
  - `var` : 호이스팅되지만 undefined로 초기화
- `this` 바인딩 방식의 차이

- 예시 1) 한 줄 본문 - `return` 키워드 생략 가능

```javascript
const hello = function (name) {
  return "Hello, " + name;
}; // 함수 표현식

const hello = (name) => "Hello, " + name;
// 화살표 함수
```

- 예시 2) 여러 줄 본문 - `return` 필요

```javascript
const multiply = (a, b) => {
  return a * b;
};
console.log(multiply(3, 4)); // 츨력 : 12
```

<br>

## 화살표 함수와 `this` 바인딩

- 일반 함수와 다르게 `this`를 호출 방식에 따라 변경하지 않고, 선언된 위치에서 상위 스코프의 `this`를 유지한다
- 화살표 함수의 `this` : `렉시컬 스코프`  
   **Q. 렉시컬 스코프?**  
   코드가 작성된 위치에 따라 스코프가 결정되는 것.
  -> 즉 화살표 함수는 렉시컬 스코프를 따르는 this, 호출 방식에 상관 없이 선언된 위치의 `this`를 사용한다.

- 예제 1) 객체의 메서드로 사용할 때(`obj.method()`) -> `this` 유지 X, 전역 객체를 가리킴

```javascript
// 일반 함수에서 this
const obj = {
  value: 10,
  func: function () {
    console.log(this.value);
  },
};
obj.func(); // 10 (obj을 가리킴)

// 화살표 함수에서 this
const obj2 = {
  value: 20,
  arrow: () => {
    console.log(this.value);
  },
};
obj2.arrow(); // undefined (전역 객체를 가리킴);
```

- 예제 2) 콜백 함수로 사용할 때(`setTimeout`, `forEach` 등 내부 함수) -> 화살표 함수의 `this` 유지 -> 상위 스코프의 `this`를 그대로 사용

```javascript
const person = {
  name: "Alice",
  greet: function () {
    setTimeout(() => {
      console.log(`Hello, my name is ${this.name}`);
    }, 1000);
  },
};
person.greet();
// 출력 : 1초 후, "Hello, my name is Alice"
// 만약 일반 함수였다면, this가 window를 가리켜 `undefined`
```
