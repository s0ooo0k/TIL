# Proxy

- `Proxy` 객체는 기존 객체의 동작을 가로채 특정 로직을 실행할 수 있게 해줌
- 객체를 감싸서(get, set) 동작을 확인해 원하는 처리를 추가할 수 있는 기능 제공

### Proxy의 주요 핸들러(트랩)

| 트랩 이름                                | 설명                                            |
| ---------------------------------------- | ----------------------------------------------- |
| `get(target, property, value, receiver)` | 객체의 속성 읽기를 가로챔(obj.property)         |
| `set(target, property, value, receiver)` | 객체의 속성 변경을 가로챔(obj.property = value) |
| `deleteProperty(target, property)`       | 속성 삭제 감지(delete obj.property)             |
| `has(target, property)`                  | 속성 존재 여부 검사 감지(property in obj)       |
| `onwKeys(target)`                        | 객체의 모든 키 조회 감지(Object.keys(obj))      |

### Proxy 기본 사용법

```javascript
const obj = {
  name: "sook",
  age: "20",
};

// Proxy 생성
const proxyObj = new Proxy(obj, {
  get(target, property) {
    console.log(`${property} 값을 읽었습니다`);
    return target[property]; // 값 반환
  },
  set(target, property, value) {
    console.log(`${property} 값을 ${value}로 변경했습니다.`);
    target[property] = value;
    return true; // 반드시 true를 반환해야 정상 동작
  },
});
// 값 읽음(get 동작)
console.log(proxyObj.name);
// 값 변경(set 동작)
proxyObj.age = 30;

/* 출력
name 값을 읽었습니다
sook
age 값을 30로 변경했습니다.
*/
```

#### 예제 - 메모장

`Proxy`를 사용함으로 `data` 배열이 변경될 때마다(set) 실행

```javascript
const data = new Proxy([], {
  set(target, property, value) {
    target[property] = value; // 원래 배열에 값 추가
    updateContainer(); // UI 업데이트
    updateStorage(target); // localStorage 업데이트
    return true;
  },
});
```

### Poxy의 장점

- 객체의 모든 동작을 커스텀 가능하다(get, set, delete 등)
- 자동 UI 업데이트 가능(반응형 상태 관리)
- 보안 강화(읽기 전용 속성, 속성 상제 방지 등)
- 데이터 검증 및 로깅 기능 추가 가능
