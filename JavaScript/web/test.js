function data(callback) {
  setTimeout(() => {
    console.log("데이터 로드 완료");
    callback();
  }, 2000);
}
function proData() {
  console.log("데이터 처리 중");
}
data(proData);
