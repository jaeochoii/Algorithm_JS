let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input.shift());

let board = [];
input.forEach((value) => board.push(value.split(' ').map(Number)));


function RGB(start) {
    let sumBoard = Array.from({length: N}, () => []);

    sumBoard[0][start] = board[0][start];
    sumBoard[0][(start + 1) % 3] = 1000;
    sumBoard[0][(start + 2) % 3] = 1000;

    for(let i = 1; i < N; i += 1) {
        for(let j = 0; j < 3; j += 1) {
            sumBoard[i][j] = board[i][j] + Math.min(sumBoard[i-1][(j+1) % 3], sumBoard[i-1][(j+2) % 3]);
        }
    }
    let result = Infinity;
    for(let i = 0; i < 3; i += 1) {
        if(start === i) continue;
        else {
            result = Math.min(result, sumBoard[N-1][i]);
        }
    }

    return result;
}
let answer = Infinity;

for(let i = 0; i < 3; i += 1) {
    answer = Math.min(answer, RGB(i));
}

console.log(answer);