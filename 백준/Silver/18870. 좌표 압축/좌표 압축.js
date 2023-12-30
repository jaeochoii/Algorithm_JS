const fs = require('fs');
const  input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input) {
    const numberArr = input[1].split(' ').map(Number);

    const set = new Set(numberArr);
    const sortArr = [...set].sort((a, b) => a - b);

    const map = new Map();

    sortArr.forEach((value, index) => {
        map[value] = index;
    })

    let answer = [];

    for(let i = 0; i < numberArr.length; i += 1) {
        answer.push(map[numberArr[i]]);
    }

    console.log(answer.join(' '));
}

solution(input);