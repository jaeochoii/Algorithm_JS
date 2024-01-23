let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
const N = Number(input.shift());

let DP = [1, 3];

for(let i = 2; i <= N; i += 1) {
    DP.push((DP[i-1] * 2 + DP[i-2]) % 9901);
}

console.log(DP[DP.length - 1]);