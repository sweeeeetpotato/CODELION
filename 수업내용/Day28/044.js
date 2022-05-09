i = 2;
result = 0;
while(i < 101){
    result += i;
    i+=2;
}

i = 2;
result = 0;
while(i < 101){
    result += i*2;
    i++;
}

i = 0
sum = 0
while((i+=2)<101){
    sum += i
}

i = 0
while(i<100){
    if (i > 10) {
        break
    }
    console.log(i)
    i++;
}


i = 0
while(i<100){
    i++;
    console.log(i, 'start')
    if (i > 10) {
        continue
    }
    console.log(i, 'end')  
}
console.log('end')