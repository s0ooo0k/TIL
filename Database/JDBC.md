# JDBC

## JDBC란?

- Java에서 직접 DB에 접속해 쿼리를 실행할 수 있게 해주는 Java 표준 API
- JDBC는 직접 드라이브를 통해 DB와 연결하며 쿼리 및 실행 결과 처리를 제공한다
- 드라이버 로드, Connection 생성, 쿼리, 결과 매핑 모든 걸 직접해야함

## JDBC 기본 흐름

![Image](https://github.com/user-attachments/assets/114b5f99-6755-4ee2-b471-7714cd819f04)

1. `Connection` 객체로 DB 연결
2. `Statement` 또는 `PreparedStatement`로 쿼리 작성
3. SQL 실행 (executeQuery, executeUpdate)
4. ResultSet으로 결과 처리 (SELECT의 경우)
5. 모든 객체는 사용 후 close() 또는 try-with-resources로 종료

### `getConnection()` 메서드

- JDBC 드라이버를 로드, DB 연결 객체를 반환
- Controller에서는 알 필요가 없고, Repository 내부에서만 사용한다다

```java
Class.forName("com.mysql.cj.jdbc.Driver");
return DriverManager.getConnection(url, user, password);
```

### JDBC 객체 예시 흐름

```java
try (Connection conn = getConnection(URL, USER, PASSWORD)) {
    Statement stmt = conn.createStatement();
    ResultSet rs = stmt.executeQuery("SELECT * FROM accounts");
}
```
