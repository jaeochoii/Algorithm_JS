const fs = require('fs');
const  input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

input.shift();
function reduce(input) {
    const numberArr = input.shift().split(' ').map(Number);
    const TCs = input.map((item) => item.split(' ').map(Number));

    const sumArr = Array.from({length : numberArr.length + 1}).fill(0);
    numberArr.forEach((value, index) => {
        sumArr[index+1] = sumArr[index] + value;
    })

    let answer = [];

    TCs.forEach((TC) => {
        answer.push((sumArr[TC[1]] - sumArr[TC[0]-1]));
    })
    console.log(answer.join('\n'));
}

reduce(input);