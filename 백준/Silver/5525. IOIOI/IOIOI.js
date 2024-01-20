let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
const N = Number(input.shift());
const STRING = input[1];
let str = 'I';
for(let i = 0; i < N; i += 1) {
    str += 'O';
    str += 'I';
}

let count = 0;

for(let i = 0; i < STRING.length - str.length + 1; i += 1) {
    const sliceStr = STRING.slice(i, i + str.length);
    if(sliceStr === str) count += 1;
}

console.log(count);