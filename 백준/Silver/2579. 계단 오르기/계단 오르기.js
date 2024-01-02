const fs = require('fs');
const  input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const LENGTH = Number(input.shift());

const stairPoint = input.map(Number);

let fiboArr = [];

fiboArr[0] = stairPoint[0];
fiboArr[1] = stairPoint[0] + stairPoint[1];
fiboArr[2] = Math.max(stairPoint[0], stairPoint[1]) + stairPoint[2];

for(let i = 3; i < LENGTH; i += 1) {
    fiboArr[i] = Math.max(fiboArr[i - 2] + stairPoint[i], fiboArr[i - 3] + stairPoint[i - 1] + stairPoint[i])
}

let answer;

if(LENGTH === 1) answer = fiboArr[0];
else if(LENGTH === 2) answer = fiboArr[1];
else answer = fiboArr[fiboArr.length - 1];

console.log(answer);