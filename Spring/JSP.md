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
