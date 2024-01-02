const fs = require('fs');
const  input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();
const compareArr = input;

let answer = [];

function DP(number) {
    let dpNumber = [[1, 0], [0, 1]];

    for(let i = 2; i <= 40; i += 1) {
        let dp = [];
        dp[0] = dpNumber[i-1][1];
        dp[1] = dpNumber[i-1][0] + dpNumber[i-1][1];

        dpNumber.push(dp);
    }

    return dpNumber[number];
}

compareArr.forEach((value) => {
    answer.push(DP(value).join(' '));
})

console.log(answer.join('\n'));