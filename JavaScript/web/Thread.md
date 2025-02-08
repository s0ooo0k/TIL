# Thread

## 싱글 스레드 vs 멀티 스레드

### 스레드(Thread)

- 프로그램 내에서 작업을 처리하는 실행 단위
- OS는 한 개 이상의 스레드를 사용하여 명령을 실행함

### 싱글 스레드 (Single Thread)

- 하나의 스레드만 실행됨. 1번에 1개의 작업(명령)만 처리
  -> JavaScript
- 코드 실행이 직관적이며, `경쟁 상태`가 발생하지 않음
- 하나의 흐름만 관리하면 되어, 디버깅이 쉬움
- 단, 이전 작업이 오래 걸리면 다음 작업이 지연됨(Blocking)
- 시간이 오래 걸리는 작업을 동기 방식으로 실행하면, 응답하지 않는 경우 발생

#### 예제 (JavaScript)

```javascript
console.log("작업 1 시작");
setTimeout(() => {
  console.log("작업 2(비동기 실행)");
}, 2000);
console.log("작업 3 시작");
```

실행 순서

1. 출력 : 작업 1 시작
2. setTimeout() 실행, 비동기 처리 -> 출력 : 작업 3 시작
3. 2초 후 출력 : 작업 2 (비동기 실행)

<br>

### 멀티 스레드(Multi Thread)

- 여러 개의 스레드가 동시 실행
- CPU 코어를 여러 개 사용하여 병렬(Parallel) 실행 가능
  -> Java, C, C++ 등
- 여러 작업을 동시에 실행할 수 있어 성능 향상.
- 하나의 스레드가 작업 중이어도 다른 스레드 실행 가능
- 여러 스레드가 동시에 같은 데이터 접근 시 충돌 가능(Race Condition 발생)
- 스레드 간 자원 공유 및 동기화 문제 해결 필요
- 디버깅이 어렵고, 개발 난이도 증가

#### 예제(JAVA)

```java
class MyThread extends Thread {
    public void run() {
        System.out.println("스레드 실행: " + Thread.currentThread().getName());
    }
}

public class Main {
    public static void main(String[] args) {
        MyThread thread1 = new MyThread();
        MyThread thread2 = new MyThread();

        thread1.start(); // 스레드 1 실행
        thread2.start(); // 스레드 2 실행
    }
}
```

실행 시 `thread1`과 `thread2`가 동시에 실행행
