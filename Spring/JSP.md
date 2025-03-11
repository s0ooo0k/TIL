# JSP(JavaServer Pages)란?

## JSP(JavaServer Pages)

- Java를 기반으로 한 **서버 사이드 웹 기술**
- HTML에 Java 코드를 삽입해 동적인 *웹 페이지를 생성*하는 기술
- 백엔드 로직을 쉽게 웹 페이지에 결합할 수 있다
- Servlet 기반으로 동작한다

## JSP는 왜 사용할까?

1. 동적인 웹 페이지 생성을 위하여

- HTML은 정적인 웹 페이지이기 때문에 동적 콘텐츠 생성이 어려움
- Java 코드를 포함할 수 있어, DB 정보를 불러오거나, 동적 내용 생성에 유리

2. 기존의 Java 기반 웹 어플리케이션과 연동 용이

- 예전에 개발한 Java 모듈을 그대로 활용할 수 있다.

3. 검색엔진 최적화(SEO)에 유리하다

- JSP는 `SSR(Server Side Rendering)` 방식
- 서버에서 브라우저를 생성하여 전달하기 때문에 브라우저가 HTML을 바로 렌더링할 수 있고, 검색 엔진 크롤러가 페이지를 방문했을 때 JavaScript 실행 없이도 바로 HTML을 읽을 수 있다
- 블로그, 쇼핑몰, 뉴스 등 SEO가 중요한 사이트에서 유리하다!
  ```jsp
  <%@ page language="java" contentType="text/html; charset=UTF-8" %>
  <!DOCTYPE html>
  <html>
  <head>
      <title>JSP SSR 예제</title>
  </head>
  <body>
      <h1>현재 시간: <%= new java.util.Date() %></h1>
  </body>
  </html>
  ```
  사용자가 요청할 때마다 새로운 HTML이 생성된다

## JSP 문법

1. 주석

   - `<!-- -->`과 달리, JSP의 `<%-- 주석 내용-->`은 클라이언트에게 노출되지 않고, 서버에서만 보이는 주석

   ```jsp
   <%-- JSP 주석입니다 --%>
   ```

2. 스크립트릿(Scriptlet)

   - `<% ~ %>` 안의 코드는 서버에서 실행

   ```jsp
   <% response.getWriter().println("Hello, World"); %>
   ```

   브라우저에 Hello, World 출력. HTML 응답으로 전송됨

3. 표현식(Expression)

   - `<%= ~ %>` 안의 코드의 결과 값을 브라우저에 출력

   ```jsp
   <% String name = "sook" %>
   <%= sook %>
   ```

   `name` 변수 값 출력. HTML 응답으로 전송송

4. 선언문(Declaration)

- `<%! ... %>` 멤버 변수나 메서드 선언 시 사용
  ```jsp
  <%! int i=0; %>
  ```
  JSP 실행 시 1번만 초기화됨

## JSP 파일 경로를 숨기는 이유와 방식

- 파일 경로 노출 시 서버 구조, 운영체제 종류 등이 공개될 위험
- 서버 설정이 잘못될 경우 JSP 코드가 그대로 노출될 수 있음
- JSP 파일이 직접 노출되면, 유지 보수가 어렵다(파일명이 변경될 때마다 클라이언트 측에서도 URL 변경이 필요함)

**위와 같은 보안적인 이유에서, jsp 파일 경로를 숨기는 것은 중요하다!**

### 숨기는 방식

1. MVC(Model, View, Controller) 패턴 활용
   ![image](https://github.com/user-attachments/assets/f7ba099b-dc6d-4958-92cc-115f348b6834)


   - 사용자가 URL을 통해 애플리케이션에 요청을 보내면, Controller 역할을 하는 Servlet으로 전달. (사용자는 Servlet URL만 알고 있다)
   - Servlet은 모델과 상호작용하여 요청을 처리하고, 데이터를 준비한다
   - `RequestDispatcher > forward()` 혹은 `sendDirect()` 메서드를 사용해 JSP로 제어를 넘긴다

2. URL 매핑
   - 실제 경로가 아닌 논리적 URL을 사용하여 Servlet, Controller와 연결하는 방식
   - web.xml, 어노테이션, 프레임워크를 사용해서 매핑할 수 있다

```java
// 어노테이션 기반 매핑
@WebServlet("/test")
public class UserServlet extends HttpServ {

}
```

3. WEB-INF 사용하기
   - WEB-INF의 경우, 외부에서 `http://test.com/WEB-INF/`와 같은 외부 URL로 직접 접근할 수 없다!
   - 따라서 JSP나 Dotenv와 같은 중요 파일을 해당 경로에 넣어 배치하면 보안을 강화할 수 있다
