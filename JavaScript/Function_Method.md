# 객체, 함수, 메서드

- `객체(Object)` : `key`-`value` 쌍을 저장하는 자료 구조.
  ex) 데이터를 저장하는 공간, 여러 데이터를 포함할 수 있음
- `함수(Function)` : 독립적인 기능을 수행하는 코드 블럭
- `메서드(Method)` : 객체 내부에에 정의된 함수. `this` 사용 가능. 해당 객체의 속성 활용 가능
- `클래스(Class)` : 객체를 생성하기 위한 템플릿

## 객체

- 관련된 데이터, 메서드의 집합
- 프로퍼티(Property)는 객체의 특성, 속성
  => 순서가 중요한 경우, 배열을 사용해야 된다!
    es6+ 이후로 문자열 프로퍼티 하에서 어느정도의 순서 보장이 되나, 확신할 수 없음.
```javascript
const person = {
  name: "Alice", // name: 키(key), "Alice": 값(value)
  age: 25,
  greet: function () {
    // greet: 키(key), function() {}: 값(value, 메서드)
    return `Hello, my name is ${this.name}`; // 객체 활용
  },
};

console.log(person.name); // "Alice" (프로퍼티 접근)
console.log(person.age); // 25 (프로퍼티 접근)
console.log(person.greet()); // "Hello, my name is Alice" (메서드 실행)
```

- <b> 주요 메서드 </b>

  - `Object.keys()` : 객체의 키를 배열로 반환
  - `Object.values()` : 객체의 값을 배열로 반환
  - `Object.assign()` : 객체 복사 및 병합
  - `Object.entries()` : 키-값 쌍 배열 반환

  ```javascript
  const obj = {
    a: 1,
    b: 2,
    c: 3,
  }; // 객체
  const source = {
    b: 4,
    c: 5,
    d: 6,
  };
  console.log(Object.keys(obj)); // ["a", "b", "c"]
  console.log(Object.values(obj)); // ["1", "2", "3"]
  console.log(Object.entries(obj)); //  [["a", 1], ["b", 2], ["c", 3]]

  const result = Object.assign(obj, source); // obj에 source를 합침(변경)
  console.log(obj); //{ a: 1, b: 4, c: 5, d: 6 }
  console.log(result); //{ a: 1, b: 4, c: 5, d: 6 }
  ```

<br>

## 함수(Function)과 메서드(Method)

- `함수` : 특정 작업을 수행하기 위한 코드 블록
  ex) 재사용 가능, 가독성 향상

```javascript
function greet() {
  return "Hello!";
}
console.log(greet());
```

- `메서드` : 객체에 속한 함수

```javascript
const person = {
    name = "sook",
    greet : function(){
        return `Hello, my name is ${this.name}`; //this
    }
};
console.log(person.greet()); // Hello, my name is sook

```

- `this`란 무엇인가?
  - 객체의 프로퍼티를 참조하는 키워드
    -> 메서드, 클래스 내부에서 `this`는 해당 객체를 가리킨다
