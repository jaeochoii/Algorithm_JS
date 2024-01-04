const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input.shift().split(' ').map(Number);
const quizArr = input.slice(N, N+M);

let numMap = new Map();
let strMap = new Map();

for(let i = 0; i < N; i += 1) {
    numMap.set(input[i], i+1);
}

for(let j = 0; j < N; j += 1) {
    strMap.set(j+1, input[j]);
}

let answer = [];

quizArr.forEach((value) => {
    if(value % 1 === 0) answer.push(strMap.get(Number(value)));
    else answer.push(numMap.get(value));
})

console.log(answer.join('\n'));