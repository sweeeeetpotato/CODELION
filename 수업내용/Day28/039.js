let arr = ['33','29','11','55','47'];
let sum = 0;

// 1. 반복문 이용한 방법
for (let i = 0; i < arr.length; i++) {
  sum += +arr[i];
}
console.log(sum/arr.length);

// 2. 배열 메소드를 이용한 방법
console.log(arr.reduce((a,b)=>+a + +b)/arr.length);

