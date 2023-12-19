const fs = require('fs');
const  input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const startNum = Number(input.shift());
const endNum = Number(input.shift());

function isPrime(endNum) {
    let numberArr = Array(endNum + 1).fill(true).fill(false, 0, 2);
    let answer = [];

    for(let i = 2; i * i <= endNum; i += 1) {
        if(numberArr[i]) {
            for(let j = i * 2; j <= endNum; j += i) {
                numberArr[j] = false;
            }
        }
        else continue;
    }

    for(let i = startNum; i <= endNum; i += 1){
        if(numberArr[i]) answer.push(i);
    }

    console.log(answer.join('\n'));
}

isPrime(endNum);