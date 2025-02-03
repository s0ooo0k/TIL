# DOM

## DOM(Document Object Model)

- HTML 문서를 트리 형태의 객체 모델로 변환한 것
- JavaScript로 문서 요소를 추가, 수정, 삭제 동적으로 조작 가능
- 웹 페이지의 구조를 스크립트나 프로그래밍 언어와 연결하는 인터페이스 제공
- `document` 객체를 통해 접근

### DOM 트리 구조

- HTML 문서를 트리 형태로 나타낸 구조로, 각 요소는 `노드`로 표현
  ![돔 트리 구조](https://i.ibb.co/KjWtbxT9/dom.png)
- 루트 노드는 항상 `document`

## 주요 메서드

일반적으로 가장 많이 사용되는 메서드 3개를 요약했다

#### 1. getElementById(id)

- 특정 id 요소 반환

```javascript
const title = document.getElementById("title");
title.style.color = "blue"; // 텍스트 색상 변경
```

#### 2. getElementByClassName(className)

- 특정 calss를 가진 요소를 HTMLCollection으로 반환

```javascript
const boxes = document.getElementsByClassName("box");
for (let box of boxes) {
  box.style.backgroundColor = "lightgray";
}
```

#### 3. getElementsByTagName(TagName)

- 특정 태그명을 가진 모든 요소를 HTMLCollection으로 반환

```javascript
const listItems = document.getElementsByTagName("li");
for (let item of listItems) {
  item.textContent = "Updated List Item";
}
```

<br>

## querySelector & querySelectorAll

#### 1. querySelector(cssSelector)

- 주어진 css 선택자와 일치하는 `첫 번째 요소`만 반환

```javascript
const firstBox = document.querySelector(".box");
firstBox.style.border = "2px solid red";
```

#### 2. querySeletorAll(cssSelector)

- 주어진 css 선택자와 일치하는 `모든 요소`를 NodeList 형태로 반환

```html
<div class="container">
  <ul>
    <li id="h1">happy</li>
    <li id="h2">happy</li>
    <li id="h3"><strong>{happy}</strong></li>
    <li id="h4">happy</li>
    <li id="h5">happy</li>
  </ul>
  <ol>
    <li class="x" id="e1">excited1</li>
    <li class="x" id="e2">excited2</li>
    <li class="x" id="e3">excited3</li>
    <li id="e4">excited4</li>
    <li id="e5">excited5</li>
  </ol>
</div>
```

```javascript
const el2 = document.querySelectorAll("#e3");
console.log(el2);
// NodeList [ li#e3.x ]
```

---

## DOM 조작

- 주요 메서드:
  - `createElement(tagName)`: 새 HTML 요소를 생성
  - `appendChild(child)`: 요소를 부모 노드에 추가
  - `insertBefore(newNode, referenceNode)`: 새 노드를 참조 노드 앞에 삽입
  - `removeChild(child)`: 자식 노드를 제거
  - `replaceChild(newChild, oldChild)`: 기존 노드를 새 노드로 교체
  - `textContent`: 요소의 텍스트 콘텐츠를 설정하거나 반환

=> 실습을 통해 학습하자.
