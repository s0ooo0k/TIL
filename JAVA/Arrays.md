# Arrays 배열

## 배열

- `배열(Arrays)` : 같은 타입의 데이터를 연속된 메모리 공간에 저장
- **고정된 크기**를 가지며, 인덱스를 통해 접근한다

```java
// 타입과 식별자를 통해 선언
datatType[] arrayName;
int[] age;

// 선언 후 배열의 크기를 지정해 메모리 할당
int[] snack = new int[10];
```

- 중괄호를 이용해 초기값 지정 및 인덱스를 이용해 요소에 접근한다

```java
int[] age = {1, 4, 2, 3, 5};
int[] snack = new int[4];
snack[0] = 12;
snack[1] = 10;
snack[2] = 5;
```

## 배열 요소 접근 및 순회

- 인덱스 사용

```java
System.out.println(age[0]);
```

- for문을 이용한 순회

```java
for (int i = 0; i < age.length; i++) {
    System.out.println(age[i]);
}
```

- for-each문 사용

```java
for (int num : age) {
    System.out.println(num);
}
```

## 다차원 배열

- 배열의 각 요소가 또 다른 배열 구조
- n중 for문, 인덱스를 사용하여 접근한다.

```java
int[][] matrix = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

for (int[] row : matrix) {
    for (int num : row) {
        System.out.println(num);
    }
} // 출력 : 1 2 3 4 5 6 7 8 9
```

## 배열 복사

### 1. 얕은 복사(Shallow Copy)

- 배열의 참조(주소)만 복사
- 같은 메모리 공간을 공유하기 때문에 한 쪽이 변경되면 다른 쪽도 변경된다
- `=`을 사용하여 복사

### 2. 깊은 복사(Deep Copy)

- 완전히 새로운 배열을 생성, 원소 값을 복사
- 독립적인 배열 생성, 한 쪽을 변경해도 다른 쪽은 변경되지 않음.

  1. `for`문을 이용하여 복사

  ```java
  int[] original = {1, 2, 3};
  int[] deepCopy = new int[original.length];

  for (int i = 0; i < original.length; i++) {
      deepCopy[i] = original[i];
  } // deepCopy : {1, 2, 3};

  deepCopy[0] = 99;  // 복사본이 변경되어도도
  System.out.println(original[0]);  // 원본은 그대로 (출력: 1)
  ```

  2. `System.arraycopy()` 사용

  ```Java
  System.arraycopy(원본배열, 시작위치, 복사배열, 복사위치, 복사할 길이);
  ```

  3. `Arrays.copyOf()`, `Arrays.copyOfRange()` 사용

  - `Arrays.copyOf()`

    - 배열 전체 또는 지정된 길이만큼 복사
    - 기존 배열보다 크면 기본값(0)으로 채워짐

    ```java
      int[] original = {1, 2, 3};
      int[] copy = java.util.Arrays.copyOf(original, 5); // 길이 5로 복사

      System.out.println(java.util.Arrays.toString(copy));
      // 출력: [1, 2, 3, 0, 0] (추가된 부분은 0)

    ```

  - `Arrays.copyOfRange()`

    - 배열의 특정 부분을 복사할 때 사용
    - 시작 인덱스 포함, 끝 인덱스 미포함

      ```java
      int[] original = {1, 2, 3, 4, 5};
      int[] subArray = java.util.Arrays.copyOfRange(original, 1, 4);  // 인덱스 1~3 복사

      System.out.println(java.util.Arrays.toString(subArray));
      // 출력: [2, 3, 4] (4번째 요소는 포함되지 않음)
      ```
