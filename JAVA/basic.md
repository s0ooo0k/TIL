# JAVA 입문 기초

### 1. 클래스 및 네이밍 규칙

- **클래스 이름**: `PascalCase` 사용 (e.g., `StudentRecord`)
- **메서드 & 변수 이름**: `camelCase` 사용 (e.g., `calculateSum()`, `userName`)

### 2. main 메서드와 입출력

- Java 프로그램은 `main` 메서드가 필수
- `System.out.print()` vs. `System.out.println()` (개행 여부 차이)
- **입력 처리**: `Scanner` 사용 (e.g., `nextLine()`, `nextInt()`)

### 3. 변수, 상수, 데이터 타입

- **기본 타입 (Primitive Types)**: `int`, `double`, `char`, `boolean` 등
- **참조 타입 (Reference Types)**: `String`, `배열`, `클래스` 등
- **상수**: `final` 키워드 사용 (`final int DAYS = 7;`)

### 4. 연산자

- **산술 연산자**: `+`, `-`, `*`, `/`, `%`
- **증감 연산자**: `i++` (후위), `++i` (전위) 차이 주의
- **삼항 연산자**: `(조건) ? 값1 : 값2`

### 5. 흐름 제어 (조건문 & 반복문)

- **if-else 문**: 조건에 따라 실행되는 코드 분기
- **switch 문**: 특정 값에 따라 여러 케이스 처리
- **반복문**: `for`, `while`, `do-while`, `for-each`
  ```java
  // 향상된 for 문 : iter
  for (String name : names) {
      System.out.println(name);
  }
  ```

### 6. 배열

- **1차원 배열**
- **2차원 배열**
- **배열 복사**: System.arraycopy(), Arrays.copyOfRange()
  - `=` 연산자로 할당하면 얕은 복사(배열의 참조(주소값)만 복사, 원본 배열 변경시 복사 배열도 영향)

### 7. 문자열 처리

- String: 불변(immutable) → StringBuffer / StringBuilder 사용 권장
- StringBuffer vs. StringBuilder: 동기화 유무 차이 (멀티스레드 환경 고려)

### 8. 컬렉션 프레임워크

- Set (HashSet, TreeSet): 중복 허용 X
- List (ArrayList, LinkedList): 순서 보장, 인덱스로 접근 가능
- Map (HashMap, TreeMap): 키-값 쌍 저장

### 9. 형 변환

- 자동 형 변환: 작은 타입 → 큰 타입 (int → double)
- 강제 형 변환: (int) 3.14 (소수점 버려짐)
- 문자열 ↔ 숫자 변환: Integer.parseInt("123"), String.valueOf(456)
