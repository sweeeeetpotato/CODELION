let sum = 0;
let i = 0;
do {
    i++;
    sum += i;
} while (i < 10);
console.log(sum);

sum = 0;
i = 0;
while (i < 10) {
    i++;
    sum += i;
}
console.log(sum);

sum = 0;
i = 100;
do {
    console.log('hello world')
    i++;
    sum += i;
} while (i < 10);
console.log(sum);

sum = 0;
i = 100;
while (i < 10) {
    console.log('hello world')
    i++;
    sum += i;
}
console.log(sum);
