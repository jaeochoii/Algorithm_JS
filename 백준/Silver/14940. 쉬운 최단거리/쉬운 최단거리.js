const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input.shift().split(' ').map(Number);
let board = [];
input.forEach((value) => board.push(value.split(' ').map(Number)));
let visited = Array.from({length: N}, () => Array(M).fill(0));
let x, y;
for(let i = 0; i < N; i += 1) {
    for(let j = 0; j < M; j += 1) {
        if(board[i][j] === 2) {
            [x, y] = [i, j];
            break;
        }
    }
}

const dX = [-1, 1, 0, 0];
const dY = [0, 0, -1, 1];

let queue = [[x, y]];

while(queue.length) {
    const [X, Y] = queue.shift();

    for(let i = 0; i < 4; i += 1) {
        const [aX, aY] = [X + dX[i], Y + dY[i]];

        if(aX < N && aX >= 0 && aY < M && aY >= 0 && visited[aX][aY] === 0 && board[aX][aY] === 1) {
            visited[aX][aY] = visited[X][Y] + 1;
            queue.push([aX, aY]);
        }

        else continue;
    }
}

for(let i = 0; i < N; i += 1) {
    for(let j = 0; j < M; j += 1) {
        if(board[i][j] === 1 && visited[i][j] === 0) visited[i][j] = -1;
        else continue;
    }
}

for(let i = 0; i < N; i += 1) {
    console.log(visited[i].join(' '));
}