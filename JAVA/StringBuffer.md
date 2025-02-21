# StringBuffer

## StringBuffer의 개념

- `StringBuffer`는 문자열을 `변경(mutable)`할 수 있는 클래스
- **새로운 객체를 생성하는 것이 아니라, 기존 객체를 변경하여 성능 향상**
- 멀티스레드 환경에서 안전함

## String vs StringBuffer

- `String`의 경우 한 번 생성되면 수정할 수 없음
  - 문자열을 변경하면 새로운 객체 생성, Garbage Collector에 의해 기존 객체 제거
  - 메모리 낭비 가능성
- `StringBuffer`는 기존 객체 자체 변경, 새로운 객체 생성 X
  - 메모리 낭비 없이 성능이 좋음음

```java
// String (불변 객체 → 새로운 객체가 계속 생성됨)
String str = "Hello";
str += " Java"; // 새로운 객체 생성
System.out.println(str); // "Hello Java"

// StringBuffer (가변 객체 → 기존 객체를 수정)
StringBuffer sb = new StringBuffer("Hello");
sb.append(" Java"); // 기존 객체에 추가
System.out.println(sb.toString()); // "Hello Java"
```

## StringBuffer 메소드

- `append()` : 문자열 추가
- `insert()` : 특정 위치에 삽입
- `replace()` : 특정 범위 문자열 변경
- `delete()` : 특정 범위 문자열 삭제
- `reverse()` : 문자열 뒤집기

```java
StringBuffer sb = new StringBuffer("Hello"); // 초기값: "Hello"
sb.append(" Java");         // "Hello Java"
sb.insert(5, " Cool");      // "Hello Cool Java"
sb.replace(6, 10, "Python");// "Hello Python Java"
sb.delete(6, 13);           // "Hello Java"
sb.reverse();               // "avaJ olleH"
```
