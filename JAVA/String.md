# String

## String 문자열

- `String` : StringBuffer와 달리 `불변(Immutable)`
- 내용 변경 시 새로운 객체를 생성한다
- `객체`이며, 다양한 메서드를 제공함

```Java
// 리터럴 방식 생성
String str1 = "Java";
// new 키워드 : 항상 새로운 객체 생성, 동일한 내용이어도 별도의 객체
String str2 = new String("Python");
```

## 문자열 메서드

- `length()` : 길이 반환. `str.length()`
- `concat()`, `+` : 문자열 연결. `str1.concat(str2)`, `str1+str2`
- `equals()` : 문자열 내용 비교. `str1.equals(str2)` -> 그냥 `=`으로 비교하면 주소값 비교!
- `substring(start, end)` : 부분 문자열 추출. `str.substring(5, 10)` -> start 포함, end 미포함
- `charAt(index)` : 특정 위치 문자 반환. `str.charAt(2)`
- `indexOf()` : 특정 문자나, 문자열이 처음 등장하는 인덱스 반환(위치 찾기).
- `trim()` : 문자열 앞 뒤 공백 제거.
- `toLowerCase()`, `toUppercase()` : 소문자, 대문자 변환
- `split()` : 구분자 기준으로 문자열 분할, 배열 반환 -> `str.split(",")` , 단위로 구분
- `contains("문자열")` : 특정 문자열 포함 여부 -> true, false 출력
- `format()` : 문자열 포맷 지정. `String.format("Hello, %s!", "Java")`

## 텍스트 블록(""")

- 여러 줄 문자열 쉽게 작성
- JSON, SQL, HTML 작성 시 활용
  ```java
  String textBlock = """
    {
        "name": "Java",
        "type": "Programming Language"
    }
    """;
  ```
