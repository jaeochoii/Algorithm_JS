const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input.shift());

for(let i = 0; i < N; i += 1) {
    const [A, B] = input[i].split(' ').map(Number);
    console.log(`Case #${i+1}: ${A+B}`);
}
