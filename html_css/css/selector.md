# 선택자(Selector)

## 기본 선택자 종류

### 1. 요소 선택자(Element Selector)

- html `태그` 을 사용하여 요소 선택  
  ex) p, div

```css
/* css */
div {
  color: red;
}
```

### 2. 클래스 선택자(Class Selector)

- 클래스를 지정하고(html), 클래스를 가지 요소를 선택한다
- 재사용 및 중복이 가능해 범용적으로 사용
- 여러 클래스는는 공백으로 구분
- `.` 사용

```html
<div class="class-sel">클래스 선택자 예시</div>
```

```css
/* css */
.class-sel {
  background-color: yellow;
}
```

### 3. ID 선택자(ID Selector)

- 특정 ID를 가진 요소
- `id`는 중복 될 수 없다  
  <b> Q. ID 중복 사용 시 문제점 </b>
  1. JavaScript : `document.getElemetByID('example')` 호출 시 `id`의 첫 번재 요소만 반환. 나머지는 접근할 수 없다.
  2. `id`를 가진 요소가 여러 개 있을 경우, 스타일 적용에 혼란이 발생
- `#` 사용

```html
<div id="class-sel">아이디디 선택자 예시</div>
```

```css
/* css */
#class-sel {
  background-color: yellow;
}
```

### 4. 전체 선택자(Universe Selector)

- 문서 내 모든 요소 선택
- `*` 사용

```css
/* css */
* {
  background-color: yellow;
}
```
