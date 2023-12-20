const fs = require('fs');
const  input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const member = Number(input.shift());
let answer = [];

function solvedAC(input) {
    if(member === 0) answer.push(0);

    else {
        const deleteCnt = (member * 0.15).toFixed();
        const sortNum = input.map(Number).sort((a, b) => a-b);

        sortNum.splice(0, deleteCnt);
        sortNum.splice(sortNum.length - deleteCnt, deleteCnt);

        const addNum = sortNum.reduce((acc, cur) => {
            return acc + cur;
        }, 0);

        answer.push((addNum/sortNum.length).toFixed());
    }


    console.log(answer[0]);
}

solvedAC(input);