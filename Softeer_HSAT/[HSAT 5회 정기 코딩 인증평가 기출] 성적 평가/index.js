const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input.shift());
let sumArr = Array(N).fill(0);

// 각각 계산하는 것
for(let i = 0; i < 3; i += 1) {
    let map = new Map();
    const basicArr = input[i].split(' ').map(Number);
    const board = input[i].split(' ').map(Number).sort((a, b) => b - a);

    let count = 1;
    for(let j = 0; j < N; j += 1 ){
        if(map.has(board[j])) count += 1;
        else {
            map.set(board[j], count);
            count += 1;
        }
    }
    
    let result = [];
    
    for(let j = 0; j < N; j += 1) {
        sumArr[j] += basicArr[j];
        result.push(map.get(basicArr[j]));
    }

    console.log(result.join(' '));
}

// 최종 합 계산하기
let newMap = new Map();
let basicSum = sumArr.slice();
let sortSum = sumArr.sort((a,b) => b - a);

let cnt = 1;
for(let j = 0; j < N; j += 1 ){
    if(newMap.has(sortSum[j])) cnt += 1;
    else {
        newMap.set(sortSum[j], cnt);
        cnt += 1;
    }
}

let answer = [];

for(let j = 0; j < N; j += 1) {
    answer.push(newMap.get(basicSum[j]));
}

console.log(answer.join(' '));
