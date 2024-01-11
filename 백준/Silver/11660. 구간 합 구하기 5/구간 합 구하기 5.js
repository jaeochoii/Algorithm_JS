const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input.shift().split(' ').map(Number);
let board = [];
let location = [];
for(let i = 0; i < N; i += 1) {
    board.push(input[i].split(' ').map(Number));
}
for(let i = N; i < N+M; i += 1) {
    location.push(input[i].split(' ').map(Number));
}

let dp = Array.from({length: N+1}, () => Array(N+1).fill(0));


for(let i = 1; i <= N; i += 1) {
    for(let j = 1; j <= N; j += 1) {
        dp[i][j] = board[i-1][j-1] + dp[i][j-1] + dp[i-1][j] - dp[i-1][j-1];
    }
}

let result = [];

for(let i = 0; i < M; i += 1) {
    const [fromX, fromY, toX, toY] = location[i];

    result.push(dp[toX][toY] - dp[fromX - 1][toY] - dp[toX][fromY - 1] + dp[fromX - 1][fromY - 1]);
}
console.log(result.join('\n'));