result = 0
for (let i = 3; i < 20; i+=3) {
    result += i;
}


result = 0
for (let i = 2; i < 101; i+=2) {
    result += i;
}

// 이렇게 하면 감점. 시간복잡도가 커짐.
result = 0
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        result +=i;
    }
}