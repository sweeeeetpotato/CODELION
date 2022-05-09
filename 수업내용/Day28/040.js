//옆에 있는 숫자와의 차가 가장 작은 것은 쌍은?

let arr = [1, 3, 4, 8, 13, 17, 20];
let result = 10000000;
let index = 0;
// 0부터 순회할 경우
for (let i = 0; i < arr.length - 1; i++) {
  if (result > arr[i + 1] - arr[i]) {
    result = arr[i + 1] - arr[i]
    index = i
  }
}
console.log(arr[index], arr[index + 1]);

// 1부터 순회할 경우
result = 10000000;
index = 0;
for (let i = 1; i < arr.length; i++) {
  if (result > arr[i] - arr[i - 1]) {
    result = arr[i] - arr[i - 1]
    index = i
  }
}
console.log(arr[index], arr[index + 1]);

