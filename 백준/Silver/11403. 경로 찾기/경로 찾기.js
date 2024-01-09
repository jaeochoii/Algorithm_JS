const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input.shift());
let board = [];
input.forEach((value) => board.push(value.split(' ').map(Number)));

for(let i = 0; i < N; i += 1) {
    for(let j = 0; j < N; j += 1) {
        for(let k = 0; k < N; k += 1) {
            if(board[j][i] && board[i][k]) board[j][k] = 1;
        }
    }
}

for(let i = 0; i < N; i += 1) {
    console.log(board[i].join(' '));
}