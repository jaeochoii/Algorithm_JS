const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, X] = input.shift().split(' ').map(Number);
const days = input.shift().split(' ').map(Number);

let result = [];

let sum = 0;

for(let i = 0; i < X; i += 1) {
    sum += days[i];
}

result.push(sum);

for(let i = X; i < N; i += 1) {
    let newValue = sum;
    newValue -= days[i - X];
    newValue += days[i];

    result.push(newValue);
    sum = newValue;
}

if(sum === 0) {
    console.log('SAD');
    return;
}

let count = 0;
let maxNumber = Math.max(...result);

for(let i = 0; i < result.length; i += 1) {
    if(result[i] === maxNumber) count += 1;
}

console.log(maxNumber);
console.log(count);