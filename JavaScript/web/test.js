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
// 값 읽기(get 동작)
console.log(proxyObj.name);
// 값 변경(set 동작)
proxyObj.age = 30;

/* 출력
name 값을 읽었습니다
sook
age 값을 30로 변경했습니다.
*/
