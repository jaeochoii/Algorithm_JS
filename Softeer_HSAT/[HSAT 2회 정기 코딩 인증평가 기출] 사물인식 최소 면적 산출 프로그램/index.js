const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, K] = input.shift().split(' ').map(Number);
let graph = Array.from({length: K+1}, () => Array());

for(let i = 0; i < N; i += 1) {
    const [x, y, k] = input[i].split(' ').map(Number);
    graph[k].push([x, y]);
}

let answer = 4000000
DFS(0, 1000, -1000, 1000, -1000);
console.log(answer);

function DFS(k, minX, maxX, minY, maxY) {
    if(k === K) {
        answer = Math.min((maxX - minX) * (maxY - minY), answer);
        return;
    }

    for(let i = 0; i < graph[k+1].length; i += 1) {
        const [X, Y] = graph[k+1][i];

        const [newMaxX, newMinX] = [Math.max(maxX, X), Math.min(minX, X)];
        const [newMaxY, newMinY] = [Math.max(maxY, Y), Math.min(minY, Y)];

        if(answer <= (newMaxX - newMinX) * (newMaxY - newMinY)) continue;
        else DFS(k+1, newMinX, newMaxX, newMinY, newMaxY);
    }
}
