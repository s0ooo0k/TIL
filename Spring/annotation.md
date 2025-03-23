# 어노테이션(Annotation)

## 1. 어노테이션

- 코드에 메타데이터(정보)를 제공하는 기능, 스프링 같은 프레임워크가 동작 방식을 바꾸거나 자동화하기 위해 사용한는 특수 주석 형태
- `@`로 시작
- 컴파일러에게 특정 정보를 제공하거나, 런타임에 특정 동작을 지정함

## 2. 자주 쓰이는 어노테이션 10가지

1. `@Controller`

- HTML 뷰 페이지를 반환하는 컨트롤러

```java
@Controller
public class mainController {
    @GetMapping("/main")
    public String main() {
        return "main";
    }
}
```

2. `@RestController`

- JSON 등 데이터를 반환하는 컨트롤러
- `@ResponseBody`가 자동으로 포함된

```java
@RestController
public class ApiController {
    @GetMapping("/api/hello")
    public String hello() {
        return "Hello!";
    }
}
```

3. `@RequestMapping`

- 요청 URL을 메서드에 매핑
- 메서드나 클래스 레벨에서 사용

```java
@RestController
@RequestMapping("/api")
public class UserController {
    @RequestMapping("/users")
    public String getUser() {
        return "users";
    }
}
```

4. `@GetMapping`, `@PostMappin`

- 특정 HTTP 메서드에 매핑
- `@RequestMapping`보다 간단하다

```java
@RestController
public class PostController {

    @PostMapping("/post")
    public String createPost() {
        return "Post created!";
    }
}
```

5. `@Autowired`

- 의존성 주입
- 생성자, 필드, 세터에 사용할 수 있음

```java
@Service
public class UserService {
    public String getUser() {
        return "sook";
    }
}

@RestController
public class UserController {
    private final UserService userService;

    @Autowired // 생성자 주입
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/user")
    public String getUser() {
        return userService.getUser();
    }
}
```

6. `@Component`

- 스프링 빈으로 등록되는 기본 어노테이션

```java
@Component
public class Logger {
    public void log(String msg){
        System.out.println("Log: " +msg);
    }
}
```

7. `@Service`

- @Component 처럼 빈으로 등록됨

```java
@Service
public class UserService {
    public String user() {
        return "sook";
    }
}
```

8. `@Repository`

- 데이터베이스 접근 계층에 사용
- 예외를 Spring의 `DataAccessException`으로 반환

```java
@Repository
public class UserRepository {

    public String findUserById(Long id) {
        return "User#" + id;
    }
}
```

9. `@Configuration`

- 설정 클래스임을 나타냄

10. `@Bean`

- 개발자가 직접 만든 객체를 스프링 컨테이너에 등록할 때 사용용
