// 1. `[10, 20, 30, 40]` 값의 평균을 구하는 **함수**를 만들어주세요.
let arr = [10, 20, 30, 40];

function average(input) {
  let sum = 0;
  for (const i of input) {
    sum += i;
  }
  console.log(sum / input.length);
}
average(arr);
average([1, 2, 3]);
average([5]);


// 2. (나아가기) 숫자단위 콤마를 찍는 **함수**를 만들어주세요.
function number_comma(num) {
  let reverse_num = ('' + num).split('').reverse();

  for (let i = 3; i < reverse_num.length; i += 3) {
    reverse_num[i] += ',';
  }

  let result = reverse_num.reverse().join('');
  return result;
}
number_comma(1000);
number_comma(100000);
number_comma(10000000);


// 3. 화살표 함수를 일반 함수로 만들어보기
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

// console.log(data.map(x => x.중간고사점수))
console.log(data.map(function (x) { return x.중간고사점수 }));
/*
function score(arr) {
  let score_arr = [];
  for (const i of arr) {
    score_arr.push(i.중간고사점수);
  }
  return score_arr;
}
console.log(score(data));
*/

// console.log(data.map(x => [x.이름,x.중간고사점수]))
console.log(data.map(function (x) { return [x.이름, x.중간고사점수] }));

/*
function name_score(arr) {
  let name_score_arr = [];
  for (const i of arr) {
    name_score_arr.push([i.이름, i.중간고사점수]);
  }
  return name_score_arr;
}
console.log(name_score(data));
*/


let data1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// let newData = data1.map(a => a.map(n => n * 2));
let newData = data1.map(
  function(a){
    return a.map(
      function(n){
        return n * 2
      })
  });
console.log(newData);