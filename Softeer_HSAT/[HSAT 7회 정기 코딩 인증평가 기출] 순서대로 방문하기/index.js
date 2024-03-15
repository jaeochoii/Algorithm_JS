const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);
let board = [];
for(let i = 0; i < N; i += 1) {
    board.push(input.shift().split(' ').map(Number));
}

let place = [];
input.forEach((value) => place.push(value.split(' ').map(Number)));

const dX = [-1, 1, 0, 0];
const dY = [0, 0, -1, 1];

let visited = Array.from({length: N}, () => Array(N).fill(false));
let result = [];

function DFS(points, depth) {
    const [X, Y] = points;
    
    if(depth === M) {
        result.push([X, Y]);
        return;
    }

    if(place[depth][0] === X && place[depth][1] === Y) {
        DFS(points, depth+1);
        return;
    }
    
    visited[X-1][Y-1] = true;

    for(let i = 0; i < 4; i += 1) {
        const [aX, aY] = [X-1 + dX[i], Y-1 + dY[i]];

        if(aX < 0 || aX >= N || aY < 0 || aY >= N || board[aX][aY] === 1 || visited[aX][aY]) continue;

        else {
            DFS([aX+1, aY+1], depth);
        }
    }
    
    visited[X-1][Y-1] = false;
}

DFS(place[0], 0);
console.log(result.length);
