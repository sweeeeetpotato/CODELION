for (let i = 0; i < 5; i++) {
    console.log(i);
}

let sample = ['A', 'B', 'C', 'DD', 'EE']

for (let i = 0; i < sample.length; i++) {
    console.log(sample[i]);
}
// VM593:2 A
// VM593:2 B
// VM593:2 C
// VM593:2 DD
// VM593:2 EE

i = 0;
for (;;){
    i++;
    console.log(i);
    if(i > 5) {
        break;
    }
}
// VM819:4 1
// VM819:4 2
// VM819:4 3
// VM819:4 4
// VM819:4 5
// VM819:4 6


age = [19, 30, 23, 28, 32, 40, 32, 35, 29, 30];
for (let i = 0; i < age.length; i++) {
    console.log(age[i]);
}
// VM1142:2 19
// VM1142:2 30
// VM1142:2 23
// VM1142:2 28
// VM1142:2 32
// VM1142:2 40
// VM1142:2 32
// VM1142:2 35
// VM1142:2 29
// VM1142:2 30
for (let i = 0; i < age.length; i++) {
    console.log(age[i]);
    sum = sum + age[i] // sum += age[i]
}