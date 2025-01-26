# 호이스팅(Hoisting)

- 변수와 함수 선언이 코드 실행 전에 메모리에 등록되어, `변수와 함수 선언이 끌어올려지는 것처럼 동작`
- 코드의 작성 순서와 상관 없이 선언이 최상단으로 이동한 것처럼 동작

## 호이스팅의 특징

1. 변수 선언의 호이스팅

   - 초기값은 undefined(호이스팅 X)
   - var는 선언만 호이스팅

   ```javascript
   console.log(myVar); // undefined
   var myVar = 10;
   console.log(myVar); //10
   // 초기화(할당)는 호이스팅 되지 않았지만, 'var myVar'는 undefined으로 호이스팅
   ```

   - let, const는 호이스팅 되지만, 초기화 되지 않고 TDZ(Temporla Dead zone)에 걸림

   ```javascript
   console.log(myLet); //ReferenceError: Cannot access 'myLet' before initialization
   let myLet = 20;
   // 선언은 호이스팅되지만, 초기화 이전 단계에는 접근할 수 없다.
   // TDZ ; 초기화되기 전, 선언된 시점~초기화 시점까지의 영역
   // 초기화 전 변수에 접근하면 Reference Error
   ```

2. 함수 선언의 호이스팅
   - 완전히 호이스팅 되어 어디서든 호출 가능
   ```javascript
   console.log(hello());
   function hello() {
     return "Hello!";
   }
   // 출력 : hello!
   ```
