const obj = {
  value: 10,
  func: function () {
    console.log(this.value);
  },
};
obj.func(); // 10 (obj을 가리킴)

// 화살표 함수에서 this
const obj2 = {
  value: 20,
  arrow: () => {
    console.log(this.value);
  },
};
obj2.arrow(); // undefined (전역 객체를 가리킴);
