# Emmet & Emmet Cheet Sheet

### Emmet
`html`, `css` 등 텍스트를 정의하고 표하는 웹 마크업 언어를 빠르고 효율적으로 작성할 수 있게 도와주는 도구.

### Emmet의 사용법
VS Code와 같은 코드 에디터에서 `Tab`, `Enter` 키를 활용하여 변환함.

- <b> 예시 1 링크</b> - `a[href=""]`   
    ```html
    <a href=""></a>
    ```
- <b> 예시 2 리스트 </b> - `ul>li*3`
    ```html
    <ul>
     <li></li>
     <li></li>
      <li></li>
    </ul>
    ```

- <b> 예시 3 테이블 </b> - `tr>td*3^tr>td*3` or `(tr>td*3)*2`
    ```html
    <tr>
      <td></td>
      <td></td>
      <td></td>
    <tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
    <tr>
    ```

- <b> 예시 4 html 기본 구조 </b> - `!`
    ```html
    <!DOCTYPE html>
    <html lang="ko">!
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>문서 제목</title>
        <!-- 웹 브라우저 탭에 표시될 제목 -->
    </head>
    <body>
        <!-- 페이지 내용 -->
    </body>
    </html>
    ```

  
-------------------

### Emmet Cheet Sheet
Emme Documentation에서 제공하는 <b><a href="https://docs.emmet.io/cheat-sheet/">Emmet Cheet Sheet</a></b>
   -> 자주 사용하도록 익숙해지자!
