const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input.shift());

for(let i = 0; i < N; i += 1) {
    let answer = [];
    
    const CNT = Number(input.shift());

    const share = Math.floor(CNT / 5);
    const rest = CNT % 5;

    for(let j = 0; j < share; j += 1) {
        answer.push('++++');
    }

    answer.push('|'.repeat(rest));

    console.log(answer.join(' '));
}
