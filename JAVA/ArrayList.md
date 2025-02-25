# ArrayList

## ArrayList

- 자동으로 크기를 조절하는 가변 배열(Array 배열은 크기 고정)
- `제네릭(Generic)` : 특정 타입의 요소만 저장 가능(`ArrayList<Integer`)
- 원시 타입(`int`, `double`)은 직접 저장 불가 -> Wrapper 클래스(`Integer`, `Double` 등) 사용

```java
import java.util.ArrayList;
ArrayList<String> list = new ArrayList<>();
ArrayList<Integer> numbers = new ArrayList<>();
```

## ArraList 메서드

- `add()` : 요소 추가 -> `list.add(1, "python")`처럼 특정 위치에 추가도 가능능
- `get()` : 요소 조회 -> 배열처럼 인덱스 접근 가능
- `set()` : 요소 변경
- `remove(index)` : 요소 삭제
- `size()` : 리스트 크기 확인
- `contains()` : 특정 요소 포함 확인 -> true / false
- `clear()` : 리스트 전체 삭제

## 요소 접근

- `for`문

```java
for (int i = 0; i < list.size(); i++) {
    System.out.println(list.get(i));
}
```

- `for-each`문

```java
for (String item : list) {
    System.out.println(item);
}
```
