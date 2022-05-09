let data = [{
  반: 1,
  번: 1,
  이름: "호준",
  중간고사점수: 55
}, {
  반: 1,
  번: 2,
  이름: "길동",
  중간고사점수: 60
}, {
  반: 1,
  번: 3,
  이름: "영희",
  중간고사점수: 30
}, {
  반: 1,
  번: 4,
  이름: "철수",
  중간고사점수: 20
}, {
  반: 1,
  번: 5,
  이름: "규리",
  중간고사점수: 100
}]

// 1. 중간고사 점수를 하나의 array로 만들어주세요.
// 2. 이름과 중간고사 점수를 하나의 array로 만들어주세요.
// (나아가기) 3. 중간고사점수의 표준편차를 구해주세요. 또 어떻게 구하는 것이 효율적일지 고민해주세요.



// 1. 배열 메소드로 구현
console.log(data.map(x => x.중간고사점수));
console.log(data.map(x => [x.이름, x.중간고사점수]));


// 2. 반복문으로 구현
let arr1 = [];
let arr2 = [];
let average = 0;
let variance = 0;
let standard_deviation = 0;

for (let i = 0; i < data.length; i++) {
  arr1.push(data[i].중간고사점수);
  // arr1[i] = data[i].중간고사점수;
  arr2.push([data[i].이름, data[i].중간고사점수]);
  // arr2[i] = ([data[i].이름, data[i].중간고사점수]);
}
console.log(arr1);
console.log(arr2);
