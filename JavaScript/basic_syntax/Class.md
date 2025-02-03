# 클래스

- `클래스(Class)` : 객체를 생성하기 위한 템플릿
- `생성자(Constructor)` : 객체가 생성될 때 실행되는 메서드
- `메서드(Method)` : 클래스 내부에서 정의된 함수
- `상속(Inheritance)`: 기존 클래스를 확장, 새로운 클래스를 만들 수 있음

## 클래스

### 생성자(Constructor)

- 객체가 생성될 때 자동 실행
- 인스턴스를 초기화하는 역할
- 클래스 내부에 하나만 정의할 수 있다

### 메서드(Method)

- 클래스 내부에 정의된 함수
- 인스턴스 메서드는 생성된 객체에서 호출할 수 있다

```javascript
class Person {
  constructor(name, age) {
    // 생성자
    this.name = name;
    this.age = age;
  }
  introduce() {
    // 메서드
    return `Hi, I'm ${this.name} and I'm ${this.age} years old`;
  }
}
const person1 = new Person("sook", 25);
console.log(person1.introduce()); // Hi, I'm sook and I'm 25 years old
```

### 클래스 상속(Inheritance)

- 기존 클래스의 속성과 메서드를 재사용하여 새로운 클래스를 정의할 수 있음
- `extends`를 사용하여 확장, `super()`를 사용하여 부모 클래스의 생성자를 호출함
- 자식 클래스에서 부모클래스의 메서드를 `오버라이딩`할 수 있음

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} make a sound.`);
  }
}

class Dog extends Animal {
  // 상속
  constructor(name, breed) {
    super(name); // 부모 클래스의 생성자 호출
    this.breed = breed;
  }
  speak() {
    // 메서드 오버라이딩
    console.log(`${this.name} barks. ${this.name} is ${this.breed}`);
  }
}

const dog1 = new Dog("Buddy", "Chihuahua");
dog1.speak(); // Buddy barks.
```
