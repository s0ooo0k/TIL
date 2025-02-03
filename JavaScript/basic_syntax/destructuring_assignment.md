# 구조 분해 할당(Destructuring Assignment)

javascript는 `undefined`가 있기 때문에, 구조 분해 할당 시 짝이 맞지 않더라도 실행될 수 있다..

## 배열 구조 분해 할당

- 배열의 요소를 변수에 할당, 배열을 개별 변수로 쉽게 분해할 수 있다
- `스프레드 연산자(...)`를 이용해 나머지 요소 처리

```javascript
const arr = [1, 2, 3];
const [a, b, c] = arr;
console.log(a, b, c); // 1 2 3

const num = [10];
const [x, y = 20] = num; // 기본값 설정 가능
console.log(x, y); // 10 20
```

## 객체 구조 분해 할당

- 객체의 속성을 변수에 할당, 특정 속성 쉽게 추출 가능
  - 객체의 속성을 변수로 분해
  - 기본값 설정 가능
  - 중첩 객체 처리 가능

```javascript
const user = { name: "sook", age: "20" };
const { name, age } = user;
console.log(name, age); // sook 20

const { name: name2, age: age2, job = "egg" } = user;
console.log(name2, age2, job); // sook 20 egg
```
