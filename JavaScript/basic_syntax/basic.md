# JavaScript 기본

- `동적 타이핑` : 변수의 타입을 선언할 필요가 없다! (실제로 숫자도 정수, 실수 구분 없이 Number 하나! ~~말도 안돼~~)
- `프로토타입 기반 객체지향` : 클래스 없이 객체를 생성, 상속할 수 있다.
- `함수형 프로그래밍` : 함수를 일급 객체로 취급
- `이벤트 기반 프로그래밍` : 사용자 상호작용

```sh
node [파일이름.js]
```

위 명령어를 통해 파일을 실행한다

<br>

## 변수

- `var` : 함수 스코프, 재선언 가능, 재할당 가능
- `let` : 블록 스코프, 재선언 불가, 재할당 가능
- `const` : 블로 스코프, 상수, 재선언 불가, 재할당 불가

```javascript
var x = 1;
let y = 2;
const z = 3;

var x = 10; // 가능
y = 20; // 가능
// z = 30 // 불가
```

<br>

## 데이터 타입(Data Type)

### 원시 타입(Primitive Type)

- `Number`: 숫자자(정수, 실수 모두 포함, 구별 ㅌㅌ)
- `String`: 문자열
- `Boolean`: 논리값(true/false)
- `undefined`: 값이 할당되지 않은 변수의 타입
- `null`: 비어 있음을 표현하는 값(의도적)
- `Symbol`: 유일한 값을 생성하기 위한 타입
- `BigInt`: 매우 큰 정수를 다룰 수 있는 타입

```javascript
let num = 42; // Number
let str = "Hello"; // String
let isTrue = true; // Boolean
let notDefined; // undefined
let empty = null; // console.log(typeof empty); // 출력 : object
let uniqueKey = Symbol("id"); // Symbol
let bigNumber = 123456789012345678901234567890n; // BigInt
```

### 참조 타입(Reference Type)

참조 타입은 `객체(Object)`를 저장하며, 값이 아닌 `메모리 주소(참조)`를 저장함

1. Object : 키-값 쌍으로 구성된 데이터 구조. ex) Python Dictionary..

   ```javascript
   let person = {
       name = "sook",
       age = "25"
   }
   cosole.log(person.name); // sook
   console.log(person[age]); // 25
   ```

2. Array : 순서가 있는 데이터의 집합. index 0부터 시작
   - 주요 메서드 : `push`, `pop`, `shift`, `unshift`
   ```javascript
   let numbers = [1, 2, 3];
   numbers.push(4); // [1, 2, 3, 4]
   numbers.pop(); // [1, 2, 3]
   console.log(numbers); // 출력 [1, 2, 3]
   ```

<br>

## 연산자

### 산술 연산자

- `+`, `-`, `*`, `/`, `%`, `**(거듭제곱)`
- 몫을 구하기 위해서는?
  -> `Math.floor()` 정수 나눗셈 사용!

### 비교 연산자

값을 비교하여 `참(true)` 또는 `거짓(false)`를 반환한다. (항상 값은 `bool`)

### 동등 비교

1. 느슨한 동등(==, !=)

   - 두 `값`만 비교한다. 타입이 다를 경우 자동으로 변환
   - 실제 값과 다를 수 있어 주의!

2. 엄격한 동등(===, !==)

   - 두 `값`과 `타입`이 모두 같아야 한다
   - 타입 변환 없이 정확한 비교. -> 권장!

3. 대소 비교(>, <, >=, <=)
4. 추가 사례
   - `NaN`은 어느 값과도 같지 않다. 자기 자신과도 같지 않다!
   - 문자열은 유니코드 값 기준으로 순서를 비교한다.

### 논리 연산자(단축 평가)

- `&&`, `||`, `!(반전)`
- 단축 평가. 예를들어 &&의 경우, 첫 값이 true면 다음 값을 검사하지만, false면 아예 다음 검사로 넘어가지 않는다. -> 후에 함수에서 활용
  ```javascript
  // And (&&) 단축 연산자 - T면 뒤까지 확인, F가 들어오면 뒤는 확인하지 않음
  console.log("condition1 && conditino2", condition1 && condition2); // T T
  // O -> O => T
  console.log("condition1 && conditino2", condition1 && condition3); // T F
  // O -> X => F
  console.log("condition1 && conditino2", condition3 && condition2); // F T
  // X => F
  console.log("condition1 && conditino2", condition4 && condition3); // F F
  // X => F
  ```

### 삼항연산자

```javascript
조건 ? 값1 : 값2;
```
