# Float, Positin, Flex

개념만 보면 이해하기 어려울 수 있다!
실습 페이지와 함께 보면서 이해해보자

### [Flex Layout 실습 페이지](../sample_html/flex.html)

# Flex(Flexbox)

- 컨테이너 내 아이템 간 공간 배분과 정렬 기능을 제공하는 1차원 레이아웃 모델
- 요소를 `주축(main-axis)`와 `교차축(cross-axis)`에 따라 배치
- 유연하게 요소들의 크기와 순서를 배치할 수 있음

### Flex의 정렬(Allign)의 장점?

**Position이나 기타 여러 가지 정렬에 관한 문제**

1. 가로는 괜찮지만 세로 정렬에 대한 계산이 복잡하다.
2. 하위 요소 간의 관계에 대한 정의가 어렵다.
   ex) `div` 안에 `div`가 있을 경우 하위 요소를 어떻게 해야 하는가?

다른 정렬의 단점을 `cross-axis`로 해결했다.

### Flex의 특징

- 반응형 디자인에 유용하다
- 기본 값이 shrink => 뷰포트 크기에 따라 줄어든다
- 컨테이너 요소가 불명확하거나 동적이어도 대응이 쉽다.
- 중앙 정렬, 균등 분배가 쉽다

## Flexbox 속성

```css
/* 컨테이너의 속성 */
.container {
  /* flex contaiiner로 정의 */
  display: flex;
  /* 배치 방향을 결정 */
  flex-direction: row;
  flex-direction: row-reverse;
  flex-direction: column;
  flex-direction: column-reverse;

  /*주축(main-axis | flex-direction)을 따라 Flex item 정렬*/
  justify-content: flex-start;
  justify-content: flex-end;
  justify-content: center;
  justify-content: space-between; /*가장자리 여백이 없이 균등 분배*/
  justify-content: space-around; /*양 끝에 아이템 간 간격 절반 크기만큼 여백, 동일 분배 */
  justify-content: space-evenly; /*양쪽 간격까지 n등분*/

  /*교차축(corss-axis)을 따라 정렬 */
  align-items: stretch | flex-start | flex-end | center | baseline;

  /*item이 컨테이너를 초과할 경우 줄바꿈 */
  flex-wrap: nowrap | wrap | wrap-reverse;

  /*여러 행이 있을 경우 행간 정렬 방식 지정*/
  align-content: flex-start | flex-end | center | space-between | space-around |
    stretch;
}
/*아이템의 속성*/
.item {
  /*아이템이 flex 컨테이너 내에 남은 공간을 얼마나 차지할지 지정 */
  /*기본값 0, flex-grow:2; 다른 아이템보다 2배 더 차지*/
  flex-grow: 0 | 1 | <number>;

  /*너비보다 컨테이너가 작아질 경우, 아이템이 얼마나 줄어들 수 있는지*/
  /*flex-shrink: 0; 공간이 부족해도 줄이지 않음*/
  flex-shrink: 0;

  /*아이템 기본 크기 지정, width와 비슷*/
  flex-basis: 200px;

  /* 위의 세가지를 한번에! */
  flex: 1; /* flex-grow: 1, flex-shrink: 1, flex-basis: 0% */
  flex: 2 1 100px; /* grow: 2, shrink: 1, basis: 100px */
}
```

<br>

---

### 💡 느낀 점 & 향후 활용

- 정렬이나 반응형을 생각할 때 복잡했는데, `flex` 속성을 사용해서 쉽게 설정할 수 있음.
- item간의 분배도 `justify-content`를 통해 설정할 수 있다!
