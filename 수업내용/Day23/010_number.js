// Number 관련 함수
let n = 10000;
let nFloat = 10000.123123123;
let s = '10,000,000';

console.log(`n : ${n}`);
console.log(`n.toLocaleString() : ${n.toLocaleString()}`);

console.log(`s : ${s}`);
console.log(`s.replace(/,/g, '') : ${s.replace(/,/g, '')}`);
console.log(`s.replace(',', '') : ${s.replace(',', '')}`);
console.log(`s.replaceAll(',', '') : ${s.replaceAll(',', '')}`);
console.log(`parseInt(s, 10) : ${parseInt(s, 10)}`);

console.log(`n.toFixed(10) : ${n.toFixed(10)}`);
console.log(`nFloat.toFixed(3) : ${nFloat.toFixed(3)}`);

console.log(`Number(true) : ${Number(true)}`);
console.log(`Number(false) : ${Number(false)}`);
console.log(`Number('') : ${Number('')}`);
console.log(`Number(' ') : ${Number(' ')}`);
console.log(`Number('hello') : ${Number('hello')}`);
console.log(`Number('10 20') : ${Number('10 20')}`);
console.log(`Number('10 ') : ${Number('10 ')}`);
console.log(`Number(' 10') : ${Number(' 10')}`);
console.log(`Number(' 10 ') : ${Number(' 10 ')}`);

// Math
console.log(`Math.PI : ${Math.PI}`);
console.log(`Math.round(4.7) : ${Math.round(4.7)}`); //반올림
console.log(`Math.floor(4.7) : ${Math.floor(4.7)}`); //내림
console.log(`Math.pow(2, 8) : ${Math.pow(2, 8)}`); // 2의 8승
console.log(`Math.sqrt(64) : ${Math.sqrt(64)}`);// 루트
console.log(`Math.abs(-5) : ${Math.abs(-5)}`);// 절대값
console.log(`Math.random() : ${Math.random()}`);// 0~1사이의 랜덤값
console.log(`Math.max(10, 20, 30, 40, 50) : ${Math.max(10, 20, 30, 40, 50)}`);
console.log(`Math.min(10, 20, 30, 40, 50) : ${Math.min(10, 20, 30, 40, 50)}`);