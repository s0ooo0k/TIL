# BOX model | 마진 병합

## 박스 모델의 개념과 요소

<img src="https://i.ibb.co/PMNywnF/mar.png" alt="mar" width="400px">

- 페이지 레이아웃을 구성하는 기본 개념
- 모든 html은 `box`로 취급된다!
  1. **Content** :요소의 실제 내용
  2. **Padding** : Content와 Border 사이 여백
  3. **Border**: 패딩을 감싸는 테두리
  4. **Margin** : 외부 여백, 다른 요소와의 간격 조절

<br>

## 박스 모델의 기본 속성

- **width(너비)**, **height(높이)** : Content의 너비와 높이 지정
- **padding** : 내용과 테두리 사이 여백
- **border** : 요소의 테두리 지정
- **margin** : 요소 외부 여백

```css
/* 여백을 따로 지정할 수 있다! */
div {
  /* 상, 우, 하, 좌 순서 */
  padding: 1em 2em 1em 2em;
}
```

<br>

## box-sizing 속성 (Content-box VS Border-Box)

### box-sizing 속성

- 요소의 크기를 계산하는 방식을 지정
- Box Model 계산에 영향을 미쳐 **width와 height에 포함되는 영역**을 설정함

### Conetnt-box VS Border-box

### 1. content-box (기본값)

- `width`와 `height`는 **콘텐츠 영역**만 포함
- padding과 border는 제외
- 박스의 총 크기 = `cotent+padding+border`

```css
box-sizing: cotent-box;
```

<img src="https://i.ibb.co/N1jKdfN/content.png" alt="content" width="300px" style="display:flex"></a>

### 2. border-box

- `with`와 `height`에 `padding`과 `border`도 포함
- 박스의 총 크기 = `content+padding+border`

```css
box-sizing: border-box;
```

<img src="https://i.ibb.co/xS65nKK/border.png" alt="border" width="300px" style="display:flex"></a>

### content-box VS border-box 예시

[예시 코드](../sample_html/box_sizing.html)  
<img src="https://i.ibb.co/Bnjfpnm/BOX.png" alt="BOX" width="300px"></a>

<br>

---

# 마진 병합(Margin Collapse)

### 마진 병합

- 상하 방향으로 인접한 요소들의 마진이 겹쳤을 때 발생
- **더 큰 마진값 하나만 적용**
- 좌우는 발생하지 않는다! 🙅‍♂️

### 예시

```css
.box1 {
  margin-bottom: 20px;
}
.box2 {
  margin-bottom: 40px;
}
```

두 요소 중 더 큰 `40px`만 적용된다. (겹쳐서 적용)

### 마진 병합을 방지하려면?

- 전체를 `div`로 감싼 후 `padding`을 적용하기
- `overflow` 속성을 조정하기

```css
.box1 {
  padding-bottom: 10px;
  overflow: hidden;
}
```

<br>

---

### 💡 느낀 점 & 향후 활용

- border-box가 레이아웃 계산에 더 직관적이다.
