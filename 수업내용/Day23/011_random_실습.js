// 최솟값, 최댓값 포함
var min = 3;
var max = 6;

var num = Math.floor(Math.random() * ((max - min) + 1)) + min;
console.log(`${min}이상 ${max}이하의 값 : ${num}`);

// 최솟값, 최댓값 미포함
if (max - min == 1) {
  console.log(`${min}초과 ${max}미만의 값은 존재하지 않습니다.`)
} else {
  var num1 = Math.floor(Math.random() * (max - min - 1) + (min + 1));
  console.log(`${min}초과 ${max}미만의 값 : ${num1}`);
}
