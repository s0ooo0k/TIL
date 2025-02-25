# 정규표현식

정규표현식(Regex, Regular Expression)은 문자열에서 특정 패턴을 검색, 매칭, 치환하는 도구
문자열 파싱에서 활용 가능하다.

![Image](https://github.com/user-attachments/assets/c539f66d-cb75-4c26-9fd1-21c514a2f83b)

<br>

### 정규 표현식 예제

- 이메일 주소 찾기

  ```
  ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
  ```

  - user@example.com
  - hello@naver.co.kr

- 전화번호 찾기

  ```
  ^010-\d{4}-\d{4}$
  ```

  - 010-1234-5678

- 문자열 파싱
  ```java
  String json = "{\"text\": \"Hello, World!\"}";
  String patternString = "\"text\":\\s*\"([^\"]+)\"";
  // 추출 : Hello, World!
  ```
  - 단순 JSON 구조에서 `text` 키 추출시 사용
