timestable:
for (let x = 2; x < 10; x++) {
	for (let y = 1; y < 10; y++) {
		if (x === 4) break timestable;
		console.log(`${x} X ${y} = ${x * y}`);
	}
}

for (let x = 2; x < 10; x++) {
    test:
	for (let y = 1; y < 10; y++) {
		if (x === 4) break test;
		console.log(`${x} X ${y} = ${x * y}`);
	}
}