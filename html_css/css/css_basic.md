# CSS

## CSS

- `CSS` : Cascading Style Sheets
  - `Cascading` : 위에서 아래로 떨어지는
- 웹의 시각적 표현, 디자인을 담당하는 언어
- 다양한 디바이스와 크기에 대응하는 반응형 디자인 구현현
- 콘텐츠와 디자인을 분리하여 유지보수성 향샹
  <br>
  <br>

## CSS 문법 기초

- `선택자(Selector)` : 스타일을 적용할 HTML 요소를 지정 -> Selector에 대한 자세한 내용은 여기!
- `속성(Property)` : 변경하고자 하는 스타일의 종류
- `값(Value)` : 속성에 적용할 구체적 스타일 값
- `선언(Declaration)` : 속성과 값의 쌍
- `규칙(Rule)`: 선택자와 선언 블록의 조합

```html
<p class="css-basic">CSS 기본 학습</p>
```

```css
/* .css-basic{...} : 규칙 */
/* .css-basic : 선택자(Selector) */
.css-basic {
  /* color, font-size : 속성(Property) */
  /* rgb(183, 235, 153), 18px : 값 */
  color: rgb(183, 235, 153);
  /* font-size: 18px; : 하나의 선언 */
  font-size: 18px;
}
```

<br>

## CSS 적용 방법

### 1. 인라인 스타일

    - html 요소 내에 직접 적용

- 우선순위가 가장 높지만, 재사용성이 낮다(우선순위는 여기서 확인!)

  ```html
  <div style="color:red">이것이 인라인</p>
  ```

### 2. 내부 스타일 시트

    - `head` 섹션 내 `style` 태그를 사용
    - 작성한 해당 문서에만 적용
        ```html
        <head>
            <style>
                div{
                    color:red;
                }
            </style>
        </head>
        ```

### 3. 외부 스타일 시트트

- 별도의 `.css` 파일을 생성 후 정의
- `head` 섹션에서 `link`로 연결한다
- 여러 페이지에 스타일 적용시 용이!
  ```html
  <head>
    <link rel="stylesheet" href="style.css" />
  </head>
  ```
  ```css
  /* style.css 파일 */
  div {
    color: red;
  }
  ```
