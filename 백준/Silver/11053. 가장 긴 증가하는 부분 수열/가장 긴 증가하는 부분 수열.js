const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();
const numberArr = input.shift().split(' ').map(Number);
let answer = [numberArr[0]];
let sumArr = [1];

for(let i = 1; i < numberArr.length; i += 1) {
    let max = 0;
    for(let j = 0; j < answer.length; j += 1) {
        if(numberArr[i] > answer[j]) {
            if(max < sumArr[j]) max = sumArr[j];
        }
    }

    if(max === 0) {
        answer.push(numberArr[i]);
        sumArr.push(1);
    }
    else {
        answer.push(numberArr[i]);
        sumArr.push(max+1);
    }
}

console.log(Math.max(...sumArr));