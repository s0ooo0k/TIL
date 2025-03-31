# DTO와 DAO

## DTO(Data Transfer Object)

- 데이터 전달 객체
- 시스템의 여러 객층 사이에서 순수한 데이터만 전달하는데 사용됨
- `Record`로 작성하거나, Class로 작성할 경우 필드, 생성자, getter/setter만 포함되어있는 단순 객체이다

```java
public record LeagueDTO(
        String queueType,
        String tier,
        String rank,
        int wins,
        int losses,
        String puuid
) {
}
```

- Controller, Service, DB Layer간 계층 분리 시 데이터 전달을 위해 사용
- API 요청/응답 시 데이터 구조를 정의
- Entity와 분리하여 외부에 노출하고 싶은 필드만 전달하고자 할 때 사용

## DAO (Data Access Object)

- 데이터베이스에 직접 접근해서 CRUD를 수행하는 객체
- JDBC, MyBatis, JPA 등으로 구현 가능
- 하나의 테이블에 대해 하나의 DAO 클래스를 만들기도 한다.

### DAO의 특징

- 데이터 소스(DB)에 접근하는 코드를 분리
- JDBC Connection, SQL문, resultSet 처리 등의 로직을 담당
- DTO를 입력/출력 타입으로 사용함

```java
public class UserDAO {

    public UserDTO findById(Long id) throws SQLException {
        String query = "SELECT * FROM users WHERE user_id = ?";
        try (Connection conn = getConnection();
             PreparedStatement stmt = conn.prepareStatement(query)) {
            stmt.setLong(1, id);
            ResultSet rs = stmt.executeQuery();
            if (rs.next()) {
                return new UserDTO(
                        rs.getLong("user_id"),
                        rs.getString("username"),
                        rs.getString("email")
                );
            }
        }
        return null;
    }
}
```
