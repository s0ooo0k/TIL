# Promise, async-await

## Promise?

### Promise의 개념

- `비동기 작업`을 더 쉽게 관리할 수 있또록 도와주는 객체
- 콜백함수 대신 사용 가능해, Callback Hell 문제 해결 가능
- 비동기 작업의 결과(성공 또는 실패)
- `.then()`과 `.catch()` 메서드를 통해 결과를 처리한다!

### Promise 상태

1. Pending(대기) -> 초기 상태 : 결과를 모름
2. Fulfilled(이행) -> 작업이 성공적으로 완료(`resolve` 호출)
3. Rejected(거부) -> 작업 실패(`reject ` 호출)

```javascript
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("✅ 데이터 로드 성공!");
  }, 2000);
});

myPromise.then((result) => {
  // 완료 되면, result 출력
  console.log(result);
});
```

#### 실행 흐름

1. `myPromise` 생성 -> Pending
2. setTimeout으로 2초 후 `resolve` 실행, -> fullFilled
3. `then()` 실행

## Promise Chaining(프로미스 체이닝)

- 여러 개의 `Promise`를 연결하여 순차적으로 실행

```javascript
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("📡 데이터 로드 완료!");
      resolve("데이터");
    }, 1000);
  });
}

function processData(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`📊 ${data} 처리 중...`);
      resolve("처리된 데이터");
    }, 1000);
  });
}

fetchData()
  .then(processData)
  .then((result) => {
    console.log(`✅ 최종 결과: ${result}`);
  });
```

#### 실행

1. `fetchData()` 실행
2. setTimeout(), 1초 후
   - "**📡 데이터 로드 완료!**" 출력, `resovle("데이터")` 호출
   - then(processData("데이터")) 실행
3. processDatat("데이터"), 1초 후 "**📊 데이터 처리 중...**" 출력
   - `resolve("처리된 데이터")` 호출
4. `then(result)` 실행, **✅ 최종 결과: 처리된 데이터** 출력

--

## async - await

### 개념 및 문법

- `Promise`를 더 쉽게 다룰 수 있도록 도와주는 문법
- `async` : 함수가 Promise를 반환함을 나타냄
- `await` : Promise가 이행될 때까지 실행을 일시 중지
- `try/catch`로 간소화된 오류 처리가 가능하며, 순차적 실행이 명확화

```javascript
async function handleSubmit() {
  const paymentData = await paymentWidget.requestPayment({
    orderId: "KOISABLdLiIzeM-VGU_8Z", // 주문 ID(직접 생성)
    orderName: "토스 티셔츠 외 2건", // 주문명
  });

  console.log(paymentData); // 1️⃣ 요청이 끝난 후 실행
  return paymentData; // 2️⃣ 이후 결과를 반환
}
```

#### 실행

1. paymentWidge.requestPayment()는 비동기 함수, 즉시 실행X
2. `await` 사용으로 paymentWidge.requestPayment()의 응답이 올때까지 `handleSubmit()` 실행이 멈춤
3. paymentData가 성공적으로 반환되면, console.log 실행
