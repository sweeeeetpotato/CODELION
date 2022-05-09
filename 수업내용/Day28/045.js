let i = 2;
let j = 1;
while(i < 10){
    while(j < 10) {
        console.log(`${i} X ${j} = ${i*j}`)
        j++;
    }
    j = 1;
    i++;
}


i = 2;
j = 1;
while(i < 10){
    i++;
    while(j < 10) {
        console.log(`${i} X ${j} = ${i*j}`)
        j++;
    }
}