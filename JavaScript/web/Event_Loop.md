# Event Loop, 마이크로태스크 큐, 매크로태스크 큐

## Event Loop

- JavaScript가 비동기 코드를 처리하는 매커니즘
- 비동기 작업을 적절한 타이밍에 실행할 수 있도록 관리

## JavaScript의 실행 방식 (콜 스택 + 이벤트 큐)

JavaScript가 코드를 실행하는 방식은 3가지 요소로 구성됨

### (1) Call Stack(콜 스택)

- **실행할 함수**들이 쌓이는 공간(LIFO - 후입 선출)
- 동기적인 코드(실행되는 코드)는 `콜 스택(Call Stack)`에서 실행됨

```javascript
function first() {
  console.log("1st");
}

function second() {
  console.log("2nd");
}

first();
second();
console.log("3rd");
```

#### 실행 과정

1. `first()` -> 출력 : 1st -> 제거
2. `second()` -> 출력 : 2nd ->
3. 3rd 출력 후 제거

### (2) Web API & Tas Queue(이벤트 큐)

- `setTimeout()`, `fetch()`, `addEventListner()` 같은 비동기 함수들은 Web API에서 실행됨
- 완료되면 `Task Queue(작업 큐)`로 이동하고, `Event Loop`가 이를 감시, 실행함

```javascript
console.log("A");

setTimeout(() => {
  console.log("B");
}, 1000);

console.log("C");
```

#### 실행 과정

1. 출력 : "A"
2. `setTimeout()` 실행
   -> Web API이동 후 1초 대기
3. 출력 : "C"
4. 1초 후 "B" 가 Task Queue에 들어감
5. `Event Loop`가 Call Stack 비었는지 확인 후 "B" 실행
6. 출력 : "B"

## 마이크로 태스크 큐 vs 매크로 태스크 큐

- JS에서 비동기 작업은 아래 두 가가지 큐 중 하나에 들어가 실행된다.

|               | 마이크로 태스크 큐(Microtask Queue)   | 매크로태스크 큐(Macrotask Queue)                            |
| ------------- | ------------------------------------- | ----------------------------------------------------------- |
| 예제          | `Promise.then()`, `queueMicrotask()`  | `setTimeout()`, `setInterval()`, `setImmediate()`, I/O 작업 |
| 실행 우선순위 | **매크로태스크보다 먼저 실행됨**      | 마이크로태스크가 끝난 후 실행됨                             |
| 역할          | 빠르게 실행해햐 하는 비동기 작업 처리 | 네트워크 요청, UI 업데이트 등 비교적 느린 작업              |

### 마이크로태스크 큐(Microtask Queue)

- Promise.then(), queueMicrotask() 같은 비동기 작업이 들어가는 공간.
- 매크로태스크보다 먼저 실행됨!

```javascript
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve().then(() => {
  console.log("C");
});

console.log("D");

// 출력
A;
D;
C;
B;
```

### 실행

1. 출력 : "A"
2. `setTimeout()` -> 매크로태스크 큐로 이동
3. `Promisethen()` -> 마이크로태스크 큐로 이동
4. 출력 : "D"
5. **마이크로태스크 큐가 먼저 실행**. 출력 : "C"
6. 매크로태스크 큐 실행. 출력 : "B"

## 이벤트 루프(Event Loop)의 역할

- Call Stack이 비어 있으면 큐에서 태스크를 가져와 실행
- 실행 순서
  - Call Stack이 비어있는지 확인
  - 마이크로태스크 큐 실행
  - 매크로태스크 큐 실행

---

### 정리

**1️⃣ 콜 스택(Call Stack)**
실행할 동기 코드(즉시 실행되는 코드)를 순서대로 쌓고 실행함.
실행이 끝난 함수는 콜 스택에서 제거됨.

**2️⃣ 비동기 함수 실행 (setTimeout(), Promise.then())**
비동기 함수(setTimeout(), fetch(), Promise.then())가 실행되면,
→ 콜 스택에서 제거되고,
→ Web API에서 실행을 기다림.

**3️⃣ 완료된 비동기 함수는 큐에 저장됨**
Promise.then(), queueMicrotask() → 마이크로태스크 큐(Microtask Queue)
setTimeout(), setInterval() → 매크로태스크 큐(Macrotask Queue)

**4️⃣ 이벤트 루프(Event Loop)가 실행 순서를 결정**
콜 스택이 비어있으면, 이벤트 루프가 실행됨.
마이크로태스크 큐(Microtask Queue)부터 실행
마이크로태스크가 모두 끝나면 매크로태스크 큐 실행
