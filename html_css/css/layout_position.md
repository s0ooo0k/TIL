# Float, Positin, Flex

개념만 보면 이해하기 어려울 수 있다!
실습 페이지와 함께 보면서 이해해보자

### [Layout 실습 페이지](../sample_html/css_layout.html)

<br>

# Position ✨

### Position이란?

- 요소의 `위치`를 제어함

### Static

- 요소의 기본값
- 어떤 속성도 적용되지 않는다

```css
.element {
  position: static;
}
```

### Relative

- 요소를 `원래 위치` 기준으로 이동

```css
.element {
  position: relative;
  top: 10px; /*아래쪽으로 10px 이동*/
  left: 5px; /*오른쪽으로 5px 이동*/
}
```

### Absolute

- `가장 가까운 위치 지정된 조상`을 기준
- `static`은 상위로 생각하지 않는다.

```css
div {
  position: absolute;
  top: 0;
  left: 0;
}
```

### fixed

- `뷰포트`를 기준으로 위치가 `고정`
- 스크롤에 영향을 받지 않는다! -> 스크롤이 움직여도 그대로 고정

```css
div {
  position: fixed;
  bottom: 0;
  right: 0; /*해당 위치 고정*/
}
```

### Sticky

- `스크롤`에 따라 상대적으로 이동하다, 임계점을 넘어가면 특정 위치에 고정
  ex) 광고 배너, 사이드바
- 부모 컨테이너 내에서만 고정정
- 동작 원리
  1. 초기 상태
     부모 컨테이너너를 기준으로 `상대적(relative)`로 배치됨. 스크롤에 따라 움직임(그냥 일반 흐름. content가 이동하는 것처럼)
  2. 고정 상태
     특정 위치(임계점)에 도달 시, `뷰포트에 고정(fixed)`된 것처럼 동작.
  3. 고정 해제
     요소의 부모 컨테이너가 끝날 때 해제

```css
div {
  position: sticky;
  top: 20px; /* 뷰포트 상단에서 20px 떨어진 지점에 고정 */
}
```

### z-index

- 요소의 쌓임 순서(stacking order)를 제어
- x, y, z의 `z`축과 같은 느낌
- 높은 값 > 낮은 값(음수도 가능!)
- static에는 적용하지 않는다.
  ```css
  .element1 {
    position: absolute;
    z-index: 2;
  }
  .element2 {
    position: absolute;
    z-index: 1;
  }
  ```
