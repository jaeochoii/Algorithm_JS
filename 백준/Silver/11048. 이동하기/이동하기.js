let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);
let board = [];
input.forEach((value) => board.push(value.split(' ').map(Number)));
let DP = Array.from({length: N}, () => Array(M).fill(0));

for(let i = 0; i < N; i += 1) {
    for(let j = 0; j < M; j += 1) {
        const right = i > 0 ? DP[i-1][j] : 0;
        const bottom = j > 0 ? DP[i][j-1] : 0;
        const cross = i > 0 && j > 0 ? DP[i-1][j-1] : 0;

        DP[i][j] = board[i][j] + Math.max(right, bottom, cross);
    }
}

console.log(DP[N-1][M-1]);