//'hello world'에서 l이 사용된 개수를 구해주세요./

let txt = 'Hello World'

// 1. 배열을 이용한 방법
let count = 0;
for (let i = 0; i < txt.length; i++) {
  if (txt[i] == 'l')
    count++;
}
console.log(count);

// 2. 배열 메소드를 이용한 방법
console.log(txt.split('').filter(x => x == 'l').length);




//Hello World를 거꾸로 출력의 재밌는 방법
let result = '';
for (let i = 0; i < txt.length; i++) {
  result = txt[i] + result;
}
console.log(result);

//일반적인 방법
result = '';
for (let i = txt.length - 1; i >= 0; i--) {
  result += txt[i];
}
console.log(result);

//일반적인 방법
result = '';
for (let i = txt.length; i > 0; i--) {
  result += txt[i - 1];
}
console.log(result);