# 스코프와 일급 객체, 클로저

## Scope

- 변수의 접근 가능한 범위 (이 변수가 어느 범위까지 관여하는가)

  1. `전역 스코프(Global Scope)` : 코드 전체 어디서든 접근 가능
  2. `함수 스코프(Function Scope)` : 함수 내부에서만 접근 가능
  3. `블록 스코프(Block Scope)` : `{}`로 감싼 블록 내부에서만 유효

  ```javascript
  let global = "global"; // 전역 스코프

  function test() {
    let fuct = "function"; // 함수 스코프
    if (true) {
      let block = "block"; // 블록 스코프
      console.log(block); // 출력 : block
    }
    //    console.log(block) // Error: block is not defined
  }
  test();
  // console.log(fuct)  // Error: fuct is not defined
  console.log(globa); // 출력 : global
  ```

<br>

## 일급 객체(First-Class Citizen)

JavaScript에서 함수는 `일급 객체`로 취급한다. -> 값처럼 취급 따라서..

- 함수를 `변수에 할당`할 수 있음
- 함수를 `인자로 전달`하거나 `반환`할 수 있음
- `익명 함수`와 `콜백 함수` 사용이 가능

```javascript
// 1. 함수를 변수에 할당
const hello = function (name) {
  return `Hello, ${name}`;
};
console.log(hello("sook")); // 출력 : Hello, sook

// 2. 함수를 인자로 전달
function executeCallback(callback) {
  return callback();
}
console.log(executeCallback(() => "Callback executed")); // 출력 : Callback executed
// 전달받은 함수(callback)을 실행한 결과값을 반영한다

// 3. 함수를 반환
function createMultiplier(multiplier) {
  // multiplier를 받아 새로운 함수를 반환함
  return function (num) {
    // multiplier는 반환된 함수 내부에서 기억됨. multiplier=2
    return num * multiplier;
  };
}
const double = createMultiplier(2);
console.log(double(5)); // num=5 출력 : 10
```

<br>

## 클로저(Closure)

위의 예제 3번(함수를 반환)을 보면 multplier는 반환된 함수 내부에서 기억된다.
이 기능을 `클로저(Closure)라고 한다.

- <b> 함수가 자신이 선언될 때의 주변 상태(Scope)를 기억하고, 선언된 이후에도 해당 스코프에 접근할 수 있는 기능 </b>
- 반환되거나 다른 곳에서 호출되더라도, 함수가 선언된 환경(외부 스코프)에 있는 변수에 접근 가능

### 핵심 기능

1. `내부 함수`는 `외부 함수의 변수`에 접근할 수 있다.
2. 외부 함수가 실행을 종류한 이후에도, 내부 함수는 외부 함수의 변수에 접근할 수 있다.

### 활용

1. 이벤트 핸들러 : 이벤트가 발생했을 때 값 기억
2. 비동기 작업 : 비동기 함수가 실행됏을 때 특정 데이터 유지
3. 모듈 패턴 : 데이터를 은닉하면서 동시에 필요한 기능은 노출출

### 예시

1. 기본적인 클로저

```javascript
function outer(outerVar) {
  return function inner(innerVar) {
    return `Outer: ${outerVar}, Inner: ${innerVar}`;
  };
}
const closureTest = outer("outside");
console.log(closureTest("inside"));
// 1. outer가 호출, outerVar = outside
// 2. inner를 반환. 이때 inner는 outerVar에 접근 가능
// 3. inner는 outerVar를 기억하고 있음. (Clousre)
// 4. closureTest("inside") 호출.
// 5. 출력 : Outer: outside, Inner: inside
```

2. 상태 유지

```javascript
function counter() {
  let count = 0; // 외부 함수 변수수

  return function () {
    count++; // 외부 변수 접근 및 수정 가능능
    return count;
  };
}
const cnt = counter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
```

3. 정보 캡슐화

```javascript
function createSecret(secret) {
  return {
    getSecret: function () {
      return secret;
    },
    setSecret: function (newSecret) {
      secret = newSecret;
    },
  };
}

const mySecret = createSecret("Initial Secret");
console.log(mySecret.getSecret()); // "Initial Secret"
mySecret.setSecret("New Secret");
console.log(mySecret.getSecret()); // "New Secret"
```

<br>

### 💡 느낀 점 & 향후 활용

- `Scope`는 변수가 접근 가능한 범위를 말하고, 변수의 접근 범위를 관리할 수 있다.
- `클로저`를 통하여 함수의 값을 다양하게 활용할 수 있을 것 같다. 다만 가독성 부분에 주의해야 한다!
