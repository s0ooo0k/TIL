# Spring MVC 패턴

> MVC 패턴(Model - View - Controller)

Servlet에서 Spring으로 넘어가는데, Controller, Service, Repositiory 등으로 패키지를 나누어 서비스를 설계했다. 설계의 기본이 된 MVC 패턴에 대해 알아보자!

## 1. Spring MVC 동작 흐름

```shell
[사용자] → [DispatcherServlet] → [Controller] → [Service] → [Repository] → [DB]
                                                                            ↓
[사용자] ← [DispatcherServlet] ← [Controller] ← [Service] ← [Repository] ← [DB]
```

1️⃣ 클라이언트(유저) : 브라우저에서 URL 요청(/search 와 같이 API 호출)    
2️⃣ DispatcherServlet : Spring의 핵심 컨트롤러가 요청을 받아 적절한 컨트롤러로 넘김    
3️⃣ `Controller` : `@RestController`, `@Controller`에서 요청을 처리하고 service 호출    
4️⃣ `Service` : 비즈니스 로직을 수행하고, `Repository`를 호출하여 DB와 연결    
5️⃣ `Repository` : JPA, JDBC 등을 사용하여 데이터베이스(DB)에서 데이터를 가져옴   
6️⃣ Service에서 Controller로 응답 반환   
7️⃣ Controller에서 DispatcherServlet   
8️⃣ DispatcherServlet에서 클라이언트 응답 반환   
   

## 2. Spring MVC 패턴과 프로젝트 구조

1. `Model` > dto, entity, repository
   - 데이터베이스와 연결
   - `DTO` : 클라이언트에 반환할 데이터
   - `Entity` : 데이터베이스 테이블과 매핑
2. `View` > templates, view
   - Thymleaf, JSP 혹은 JSON 응답(REST API)
   - 사용자에게 보여줄 화면
3. `Controller` > controller
   - 사용자 요청을 받고 응답을 반환
   - `@RestController`, `@GetMapping`, `@PostMapping` 등

## +) 프로젝트 설계 방식

1. 요구사항 분석 > 어떤 기능을 만들지 정리
2. 엔티티(Entity) 설계 > DB 테이블 정의 > `@Entity`로 매핑
3. DTO 정의 > 클라이언트에게 보낼 데이터 구조 > `UserDTO.java`
4. Repository 작성 > JPA 활용 데이터베이스 연결
5. Service 작성 > 핵심 비즈니스 로직 구성
6. Controller 작성 > 요청 받아 서비스 호출 후 응답 반환
7. 예외 처리 > Spring에서 `@ExceptionHandler` 사용
