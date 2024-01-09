const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input.shift().split(' ').map(Number);
const MAP = input.map((value) => value.split('').map(Number));
let visited = Array.from({length: N}, () => Array(M).fill(0));

const dX = [-1, 1, 0, 0];
const dY = [0, 0, -1, 1];

let queue = [[0, 0]];
visited[0][0] = 1;

while(queue.length) {
    const [X, Y] = queue.shift();

    for(let i = 0; i < 4; i += 1) {
        const [aX, aY] = [X + dX[i], Y + dY[i]];
        if(aX >= 0 && aX < N && aY >= 0 && aY < M && !visited[aX][aY] && MAP[aX][aY]) {
            visited[aX][aY] = visited[X][Y] + 1;
            queue.push([aX, aY]);
        }
        else continue;
    }
}

console.log(visited[N-1][M-1]);