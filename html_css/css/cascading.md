# CSS 상속과 Cascading

상속과 Cascading을 혼동하지 말자!  
Cascading을 잘 활용해 css 작성하자!

## CSS 상속(Inheritance)

`일부` 속성이 부모 요소 > 자식 요소로 상속된다.

- 상속되는 속성 : 일반적으로 텍스트와 관련된 속성
  - ex : `color`, `font`, `visibility`
- 상속되지 않는 속성 : 박스 모델 및 레이아웃 관련 속성
  - ex : `margin`, `padding`, `width`, `height`

<br>

## Cascading(겹침 규칙)

`Cascading` : 위에서 아래로 떨어지는  
 <b> 겹치는 스타일 중, 우선순위에 따라 어떤 스타일을 적용할지 결정</b> 한다.

### Cascading 결정 규칙

- <b>스타일의 출처</b> : 인라인 스타일 > 외부/내부 스타일 시트 > 브라우저 기본 시트
- <b>명시도</b> : 명시도(구체성)이 높을수록 우선 적용
  - ID 선택자 : 100
  - 클래스, 속성 선택자 : 10
  - 요소 선택자 : 1
- <b>선언 순서</b> : 나중에 선언된 스타일이 우선

### 우선순위

1. !important
2. 인라인 스타일
3. ID 선택자
4. class 선택자
5. 요소 선택자

<br>

## Cascading 예제

```html
<div id="parent">
  <p class="child">상속과 Cascading 예제</p>
</div>
```

```css
#parent {
  color: blue;
}

.child {
  font-size: 18px;
}

p {
  color: borwn;
}
```

<img src="https://i.ibb.co/ZNb7Q2m/cas.png" alt="cas" width="300px">

p는 적용되지 않고, `class`의 `child` 속성과, `부모` 속성만 적용됐다!

<br>
