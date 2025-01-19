# Meta Data & Meta Tag

### Meta Data
특정 데이터의 정보를 설명하는 "데이터의 데이터"
- 데이터 관리, 검색 및 필터링읠 용이하게 함
- 예시
  - 예시 1 : `HTML`의 웹 페이지 제목, 설명 등
  - 예시 2 : 음악 파일의 아티스트 이름, 앨범명, 장르 등
 
### Meta Tag
Html에서 `<head>` 부분에 포함되며, 웹 페이지에 관한 메타 데이터를 정의하기 위한 도구  
- 역할
  - 문자 인코딩 설정, 뷰포트 설정 등
  - `SEO(검색 엔진 최적화)`, `OG`태그를 작성
 

### OG(Open Graph) 태그
- 웹 사이트를 플랫폼에 공유할 때 미리보기를 제어
- Facebook에서 개발한 메타 태그 표준

### OG 태그 구성
- `og:title` : 페이지 제목
- `og:description` : 페이지 설명
- `og:image` : 미리 표시할 이미지
- 코드 예시
  ```html
  <head>
      <meta property="og:title" content="페이지 제목">
      <meta property="og:description" content="페이지 설명">
      <meta property="og:image" content="https://www.example.com/image.jpg">
  </head>
  ```
  

### SEO(검색 엔진 최적화)
웹 사이트 등을 검색 엔진에서 더 잘 찾을 수 있도록 설정하는 과정  
-> OG 태그, strong 등은 간접적으로 SEO에 기여한다
- 코드 예시
  ```html
  <head>
    <meta name="description" content="검색 결과에 표시될 페이지 설명">
    <meta name="keywords" content="HTML, Open Graph, SEO">
  </head>
  ```


### OG와 SEO를 활용한 예시
OG와 SEO 테스트를 위해 다음과 같이 코드를 작성했다!
```html
 <head>
    <meta property="og:title" content="s0ooo0k의 OG 활용 테스트" />
    <meta property="og:description" content="제 TIL에 놀러오세요!" />
    <meta property="og:image" content="https://raw.githubusercontent.com/s0ooo0k/dev_info/refs/heads/main/%ED%99%94%EB%A9%B4%20%EC%BA%A1%EC%B2%98%202025-01-19%20171308.png" width="500" />
    <meta name="description" content="OG와 관련된 TIL입니다" />
    <meta name="keywords" content="HTML, Open Graph, SEO" />
 </head>
```
아래와 같이 잘 작동한다!   
<img src="https://i.ibb.co/SxPGX2H/2025-01-19-172342.png" alt="OG 이미지" width="400">

