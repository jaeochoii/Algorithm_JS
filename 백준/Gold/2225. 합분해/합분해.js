let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, K] = input.shift().split(' ').map(Number);
const P =  1000000000;

let DP = Array.from({length: N+1}, () => Array(K).fill(1));

for(let i = 1; i < N+1; i += 1) {
    for(let j = 1; j < K; j += 1) {
        DP[i][j] = (DP[i-1][j] + DP[i][j-1]) % P;
    }
}

console.log(DP[N][K-1]);