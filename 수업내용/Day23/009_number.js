//숫자형 (Number)
var num = 10;

console.log(num); // 10
console.log(num/3); // 3.3333..
console.log(parseInt(num/3)); // 3

/* 숫자형의 사칙연산 */
console.log("더하기 : ", 2 + 2.5); // 4.5
console.log("빼기 : ", 5 - 7); // -2
console.log("곱하기 : ", 3 * 2); // 6
console.log("나누기 : ", 2/2); // 1

/*특수 숫자 값*/
console.log("무한대 : ", 1/0); // Infinity
console.log( "숫자가 아님" / 2); // NaN, 문자열을 숫자로 나누면 오류가 발생합니다.

console.log(num);
console.log(0.1 + 0.2 == 0.3); //부동소수점 문제
console.log(9999999999999999999);
console.log(9999999999000009999);
console.log(9999123484212545647);
// Big.js, BigNumber.js, Decimal.js, Math.js 등으로 해결할 수 있습니다.