# 예외 처리 | throw-catch | 에러 다시 던지기

## 예외 처리

- 프로그램 실행 시 발생하는 `오류, 예외(Exception)`을 적절히 처리하여 흐름을 유지하는 기법

### try-catch

- `try` : 예외 발생 가능성이 있는 코드
- `catch` : 예외 발생 시 처리

```javascript
try {
  let a = null;
  console.log(a.a);
} catch {
  console.error("에러!");
}
// 에러!
```

### try-catch-finally

- `finally` : 예외 발생 여부와 상관없이 항상 실행
- 파일 닫기, 리소스 정리 등에 활용

```javascript
try {
  let a = null;
  console.log(a.a);
} catch {
  console.error("에러!");
} finally {
  console.log("연산 종료!");
}
// 에러!
// 연산 종료!
```

<b> Q. 왜 `finally 블록`을 사용할까? </b>

```javascript
try {
  let a = null;
  console.log(a.a);
} catch {
  console.error("에러!");
}
console.log("연산 종료!");
```

<b> 어차피 항상 실행된다면 이렇게 해도 되지 않나요? </b>

A. `finally` 블록은 함수의 `return` 문이 실행되더라도 반드시 실행된다!  
일반적으로 return값이 있으면 바로 해당 함수를 탈출하나, finally는 반드시 실행되므로, 함수의 실행이 `종료되기 전에 반드시 처리`해야 할 로직을 보장할 수 있다.

```javascript
// 리소스 정리 보장하기기
function processTask(task) {
  try {
    console.log("작업 시작:", task);

    if (!task) {
      throw new Error("유효하지 않은 작업입니다.");
    }

    return `작업 완료: ${task}`;
  } catch (error) {
    console.error("에러 발생:", error.message);
    return "작업 실패";
  } finally {
    console.log("작업 종료 - 리소스 정리");
  }
}

console.log(processTask("데이터 분석")); // 정상적인 실행
console.log(processTask(null)); // 예외 발생
```

```shell
# 출력
작업 시작: 데이터 분석
작업 종료 - 리소스 정리
작업 완료: 데이터 분석

작업 시작: null
에러 발생: 유효하지 않은 작업입니다.
작업 종료 - 리소스 정리
작업 실패
```

<br>

## 에러 다시 던지기

- `throw`를 이용하여 에러 다시 던지기
- `catch` 블록에서 예외를 다시 던질 수 있다
  - 예상치 못한 오류는 다시 상위로 전달
  - 특정 조건 만족 시 재처리 가능

#### 기본 문법

```javascript
try {
  // 예외 발생 가능 코드
} catch (error) {
  if (error instanceof TypeError) {
    console.error("타입 에러 처리:", error.message); // typeError 시시
  } else {
    throw error; // 다른 예외는 다시 던짐
  }
}
```

### 예시

```javascript
function number(num) {
  if (typeof num !== "number") {
    throw new TypeError("숫자가 아닙니다");
  }
}
try {
  num("abc");
} catch (error) {
  console.error("에러 처리", error.message);
  throw error;
}
// TypeError: 숫자가 아닙니다
```
