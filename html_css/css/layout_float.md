# Float

개념만 보면 이해하기 어려울 수 있다!
실습 페이지와 함께 보면서 이해해보자

### [Layout 실습 페이지](../sample_html/css_layout.html)

## Float

### Float이란?

- 요소를 띄워서 텍스트 및 인라인 요소가 **주위를 감싸도록** 하는 속성  
   ex) 이미지와 글로 구성된 신문 기사사
- 현재는 레이아웃 구성에도 사용됨.
  ```css
  .float-test{
    float: left; /*요소를 왼쪽으로*/
    float: right; /*요소를 오른쪽으로*/
    float: none; /*기본값*/
    float: inherit; /*부모 요소 상속/
  }
  ```

### Clear 속성

- float의 영향을 제어하는데 사용
- 이전 float의 효과를 `해제`

```css
.clear-test {
  clear: left;
  clear: right;
  clear: both; /*양쪽 모두를 clear*/
  clear: none;
  clear: inherit;
}
```
