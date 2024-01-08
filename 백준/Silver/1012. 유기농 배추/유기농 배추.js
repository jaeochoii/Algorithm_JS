const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const tries = Number(input.shift());
let graph, visited, M, N, K;

for(let i = 0; i < tries; i += 1) {
    [M, N, K] = input.shift().split(' ').map(Number);

    graph = Array.from({length: M}, () => {
        return Array.from({length: N}, () => 0);
    })

    visited = Array.from({length: M}, () => {
        return Array.from({length: N}, () => false)
    })

    for(let j = 0; j < K; j += 1) {
        const [x, y] = input[j].split(' ').map(Number);
        graph[x][y] = 1;
    }

    let count = 0;

    for(let k = 0; k < M; k += 1) {
        for(let l = 0; l < N; l += 1) {
            if(graph[k][l] === 1 && visited[k][l] === false) {
                DFS(k, l);
                count += 1;
            }
        }
    }
    console.log(count);
    input.splice(0, K);
}

function  DFS(X, Y) {
    const dX = [-1, 1, 0, 0];
    const dY = [0, 0, -1, 1];
    visited[X][Y] = true;

    for(let i = 0; i < 4; i += 1) {
        let aX = X + dX[i];
        let aY = Y + dY[i];

        if(aX >= 0 && aY >= 0 && aX < M && aY < N) {
            if(visited[aX][aY] === false && graph[aX][aY] === 1) DFS(aX, aY);
        }
    }
}