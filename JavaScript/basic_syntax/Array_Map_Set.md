# 배열, Map, Set

원래 자료구조를 공부하면서 한 번에 하려고 했으나, 기본 개념은 정리하고 문제를 풀어야 조금 더 수월할 거 같아 간단하게만 정리한다!

## 배열(Array)

- 순서가 있는 데이터 저장
- 인덱스(index)를 사용하여 각 요소에 접근 가능

### 배열의 주요 메소드

- `push(value)` : 배열 끝에 요소 추가
- `pop()` : 마지막 요소 제거
- `sort()` : 배열 정렬
- `map(callback)` : 배열의 각 요소를 변환하여 새로운 배열 반환
- `filter(callback)`: 조건을 만족하는 요소만 포함한 배열 반환
- `reduce(callback, initialValue)`: 배열 요소를 축소하여 하나의 값 반환
- `slice(start, end)`: 특정 부분의 배열을 반환
- `concat(array)`: 두 배열 병합

```javascript
const lang = ["c", "javascript", "python"];
lang.push("c++");
console.log(lang);

lang.pop();
console.log(lang);
```

## Map

- 키-값 쌍을 저장하고, 키는 타입 제한이 없다
- 복잡한 키를 사용하는 데이터 저장에 사용됨

### Map의 주요 메소드

- `set(key, value)` : 키-값 추가
- `get(key)` : 키에 해당하는 값 반환
- `delete(key)` : 키 삭제
- `keys()`, `values()`, `entries()` : Map 순회

```javascript
const cook = new Map([
  ["carrot", 500],
  ["banana", 300],
]);
for (const [key, value] of cook) {
  console.log(`${key}: ${value}`);
} // 순회 가능
```

## Set

- 중복 `없는` 값의 집합 -> 고유한 값을 저장할 때 사용
- 순회 가능

### Set의 주요 메소드

- `add(value)` : 값 추가
- `delete(value)` : 값 제거
- `has(value)` : 값 존재 여부 확인

```javascript
const num = new Set();

num.add(1);
num.add(2);
num.add(3);
num.add(3); // 중복된 값은 추가되지 않는다

//has(value) : 값이 존재하는지 확인
console.log(num.has(2)); //true
console.log(num.has(4)); //false
```
