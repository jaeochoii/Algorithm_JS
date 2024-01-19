let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
const [N, M, B] = input.shift().split(' ').map(Number);
let board = [];
input.forEach((value) => board.push(value.split(' ').map(Number)));

let maxTime = Infinity;
let height = 0;

for(let i = 0; i <= 256; i += 1) {
    let inventory = 0;
    let time = 0;

    for(let j = 0; j < N; j += 1) {
        for(let k = 0; k < M; k += 1) {
            if(board[j][k] - i >= 0) {
                time += (board[j][k] - i) * 2;
                inventory += board[j][k] - i;
            }
            else {
                time += i - board[j][k];
                inventory -= i - board[j][k];
            }
        }
    }

    if(inventory + B >= 0) {
        if(time <= maxTime) {
            maxTime = time;
            height = Math.max(height, i);
        }
    }
}

console.log([maxTime, height].join(' '));