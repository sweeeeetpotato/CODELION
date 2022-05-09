let num = '12390812476'
let sum = 0;

// 1. 반복문 이용할 경우
// 문자열이라 뜻대로 안됨
for (let i = 0; i < num.length; i++) {
  sum += num[i];
}
console.log(sum);

//  parseInt를 통해 number형으로 변환
sum = 0;
for (let i = 0; i < num.length; i++) {
  sum += parseInt(num[i]);
}
console.log(sum);

//  Number를 통해 number형으로 변환
sum = 0;
for (let i = 0; i < num.length; i++) {
  sum += Number(num[i]);
}
console.log(sum);

//  +를 통해 number형으로 변환
sum = 0;
for (let i = 0; i < num.length; i++) {
  sum += +num[i];
}
console.log(sum);



// 2. 배열 메소드 이용할 경우
// 문자열이라 뜻대로 안됨
num.split('').reduce((a, b) => a + b);
num.split('').reduce((a, b) => a + parseInt(b));
num.split('').reduce((a, b) => parseInt(a) + b);

//  parseInt를 통해 number형으로 변환
console.log(num.split('').reduce((a, b) => parseInt(a) + parseInt(b)));
//  +를 통해 number형으로 변환
console.log(num.split('').reduce((a, b) => +a + +b));
