# Callback

## 비동기 프로그램이란?

- 동기(Synchronous): 순차적으로 실행됨. 앞의 작업이 끝나야 다음 작업이 실행됨.
- 비동기(Asynchronous): 작업이 완료될 때까지 기다리지 않고, 다른 작업을 먼저 실행할 수 있음.

| 내용          | **동기(Synchronous)**                           | **비동기(Asynchronous)**                                              |
| ------------- | ----------------------------------------------- | --------------------------------------------------------------------- |
| **실행 방식** | 코드가 순차적으로 실행됨                        | 시간이 걸리는 작업을 기다리지 않고 다음 코드 실행                     |
| **예제 코드** | `console.log("Hello"); console.log("World");`   | `setTimeout(() => console.log("World"), 1000); console.log("Hello");` |
| **사용 예시** | 파일 읽기, 계산 작업                            | 네트워크 요청, 데이터베이스 호출                                      |
| **장점**      | 실행 순서가 예측 가능                           | 대기 시간이 길어도 다른 작업 수행 가능                                |
| **단점**      | 느린 작업이 있으면 전체 코드 실행이 멈춤(Block) | 코드 실행 순서를 예상하기 어려울 수 있음                              |

### 🔧 JavaScript는 싱글 스레드이지만 비동기 동작이 가능하다

JavaScript는 기본적으로 싱글 스레드이지만, **Web API + 이벤트 루프(Event Loop) + 콜백 큐**를 활용하여 비동기 처리를 지원함

- `setTimeout()`, `fetch()`, `addEventListner()` 같은 비동기 함수는 Web API를 통해 실행
- 비동기 작업이 끝나면 `Callback Queue`를 통해 실행할 수 있도록 루프 관리
  -> I/O 작업이나, 네트워크 요청과 같이 소모적인 작업을 효과적으로 처리한다다

---

## 콜백 함수(Callback Function)

- 다른 함수에 인자로 전달되어 나중에 실행되는 함수
- 특정 작업이 끝난 후 실행될 함수를 전달하여 비동기 작업 처리
- 이벤트 처리에도 활용할 수 있다!

```javascript
function data(callback) {
  setTimeout(() => {
    console.log("데이터 로드 완료");
    callback();
  }, 2000);
}
function proData() {
  conosle.log("데이터 처리 중");
}
data(proData);
```

**실행 과정**

1. data(proData)
   -> `data` 함수 실행
   -> `setTimeout()` 비동기 함수. 2초 후 실행 예약
2. `setTimeout()` 비동기 실행, data 함수 바로 종료
3. 2초 후, setTimeout의 콜백백 함수 실행
   -> 출력 : 데이터 로드 완료
   -> callback 실행 -> proData 함수 호출
   -> 출력 : 데이터 처리 중

<br>

### 콜백 지옥(Callback Hell)

- 콜백 함수가 중첩되면, 코드의 가독성이 떨어지고, 유지보수가 어려워짐

#### 콜백 지옥을 해결하기 위한 원칙

- 함수 분리 : 중첩된 콜백을 각각 별도의 함수로 분리하여 단순화 시킨다
- 에러 핸들링 통합 : 공통의 에러 핸들링 로직을 작성해 중복을 감소시킨다.

#### 문제 해결 방법

- ES6의의 `Promise`를 통해 비동기 작업을 순차적으로 진행하며, 체이닝(then)을 통해 중첩 구조를 피한다.
- `async/await`을 사용한다

```javascript
function step1(callback) {
  setTimeout(() => {
    console.log("Step 1 완료");
    callback();
  }, 1000);
}

function step2(callback) {
  setTimeout(() => {
    console.log("Step 2 완료");
    callback();
  }, 1000);
}

function step3(callback) {
  setTimeout(() => {
    console.log("Step 3 완료");
    callback();
  }, 1000);
}

// 콜백 지옥 발생!
step1(() => {
  step2(() => {
    step3(() => {
      console.log("모든 작업 완료!");
    });
  });
});
```
