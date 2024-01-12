const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input.shift());
let current = 0;
let arr = [];

for (let i = 0; i < N; i += 1) {
    const COUNT = Number(input[current]);
    let array = [];

    for (let j = current + 1; j < current + COUNT + 1; j += 1) {
        array.push(input[j].split(' ').map(Number));
    }

    array.sort((a, b) => a[0] - b[0]);

    let standard = 0;
    let count = 1;

    for(let k = 1; k < array.length; k += 1) {
        if(array[standard][1] > array[k][1]) {
            count += 1;
            standard = k;
        }
    }

    arr.push(count);
    current += COUNT + 1;
}

console.log(arr.join('\n'));