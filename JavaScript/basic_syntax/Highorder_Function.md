# 고차함수(map, reduce, filter)

## map()

- 각 배열의 요소를 `변환`하여 새로운 배열열을 생성
  -> 간단하게 말해 언패킹 느낌
- 기존 배열을 변경하지 않는다!

#### 예시 1) 기존 복사와 배열 순회를 활용한 map

```javascript
const arr = ["Python", "JavaScript", "Java"];

const arrPaste = arr; // 그냥 복사, 연결되어 똑같이 적용
console.log(`${arr}와 ${arrPaste}은 ${Object.is(arr, arrPaste)}`);

const arrMap = arr.map((item) => item);
// map을 이용하면 기존 배열 변경 X
// 기존 배열을 순회하며 새로운 배열 생성성
console.log(`${arr}와 ${arrMap}은 ${Object.is(arr, arrMap)}`);
// 출력
// Python,JavaScript,Java와 Python,JavaScript,Java은 true
// Python,JavaScript,Java와 Python,JavaScript,Java은 false
```

#### 예시 2) 스프레드 연산자, slice() 사용 복사

```javascript
const arr2 = ["Python", "JavaScript", "Java"];
const arrMap2 = [...arr2];
// 배열을 얕은 복사(shallow copy)함
console.log(`스프레드 연산자 : ${arrMap2}`);
console.log(`${arr2}와 ${arrMap2}은 ${Object.is(arr2, arrMap2)}`);

const arrMap3 = arr2.slice();
// slice(strat, end)는 배열을 자르는 용도, slice()는 배열 전체 복사
console.log(`슬라이스: ${arrMap3}`);
console.log(`${arr2}와 ${arrMap3}은 ${Object.is(arr2, arrMap3)}`);

// 출력
// 스프레드 연산자 : Python,JavaScript,Java
// Python,JavaScript,Java와 Python,JavaScript,Java은 false
// 슬라이스: Python,JavaScript,Java
// Python,JavaScript,Java와 Python,JavaScript,Java은 false
```

#### 예제 3) 대문자로 변환하기

```javascript
const words = ["hello", "world", "javascript"];
const upperCaseWord = words.map((el) => el.toUpperCase());
console.log(upperCaseWrod);
// ["HELLO", "WORLD", "JAVASCRIPT"]
```

<br>

## filter()

- 조건을 만족하는 요소만 `추출`하여 새로운 배열 생성
- 기존 배열을 변경하지 않음
- 특정 데이터를 걸러낼 때 사용용

#### 예시 1) 짝수 찾기

```javascript
const num = [1, 2, 3, 4, 5, 6];
const even = num.filter((el) => el % 2 === 0);
console.log(even);
// [ 2, 4, 6 ]
```

### 예시 2) 조건 금액 찾기

```javascript
const rice = [{ price: 5000 }, { price: 10000 }, { price: 15000 }];
const expensive = rice.filter((el) => el.price > 8000);
console.log(expensive);
// [ { price: 10000 }, { price: 15000 } ]
```

<br>

## reduce()

- 배열을 하나의 값으로 축약
- 초기값을 제공할 수 있다(빈 배열을 처리해야 할 경우 초기값 꼭 제공)
- reduce 문법

```javascript
array.reduce((accumulator, currentValue, index, array) => {
  return 새로운_accumulator;
}, 초기값);
```

    - `accumulator` : 누적값(이전 루프 반환 값)
    - `currentValue` : 현재 순회 중인 요소
    - `index` (선택) : 현재 요소의 인덱스
    - `array` (선택) : 원본 배열
    - `초기값` (선택) : `accumulator`의 초기값

#### 예시 1) 누적합 구하기기

```javascript
const num = [1, 2, 3, 4];
const sum = num.reduce((acc, cur) => acc + cur, 0);
console.log(sum);
// 10
// 부분합, 누적합 구하는데 사용 가능할듯!
```

#### 예시 2) 이름 출력 - push()

```javascript
const mem = [{ name: "홍길동" }, { name: "김철수" }, { name: "박존도" }];
console.log(
  mem.reduce((acc, cur) => {
    acc.push(cur.name); // 현재 객체(cur)의 name을 acc 배열에 추가
    return acc; // 누적값(acc)을 반환 -> 다음 루프에서 acc가 이전 값이 됨
  }, []) // [] 초기값, 빈 배열
);
// 출력 : ["홍길동", "김철수", "박존도"]
```

#### 예시 3) 이름 출력 - 스프레드 연산자

```javascript
const mem = [{ name: "홍길동" }, { name: "김철수" }, { name: "박존도" }];
const result = mem.reduce((acc, cur) => [...acc, cur.name], []);
// ...acc : 이전값을 새로운 배열에 복사
console.log(result);
```

스프레드 연산자를 사용하면 간결하게 표현할 수 있다! (성능은 떨어질 수 있다..)
