# IntelliJ Java Emmet

## 출력 관련

- `sout` : `System.out.println();`
- `soutv` : `System.out.println("변수명 = " + 변수;);` 자동 완성

## 반복문 관련

- `iter` : `for-each`문(향상된 for문) 자동 완성
  ```java
  // iter
  for(String item : list){
      //sout
      System.out.println(item);
  }
  ```
- `itar` : `index` 기반 for문 자동 완성
  ```java
  // itar
  for (int i = 0; i < array.length; i++) {
    System.out.println(array[i]);
    }
  ```
- `itco` : `컬렉션 순회` for문 자동 완성

## 조건문

- `ifn` : `if(변수==null)` 자동 완성
- `inn` : `if(변수!=null)` 자동 완성
- `inst` : `instanceof` 자동 완성
  ```java
  A a = new A();
  System.out.println(a instanceof A);   // true 출력
  // instanceof : object가 type이거나, type을 상속받는 클래스라면 true
  ```

## 기타타

- `psvm` : public static void main(String[] args) {} 자동 완성
- `psfs` : public static final String 자동 완성
- `psfi` : public static final int 자동 완성
- `psfl` : public static final long 자동 완성
