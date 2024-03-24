const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 기본 세팅
const [N, M] = input.shift().split(' ').map(Number);
let adj = Array.from({length: N+1}, () => []);
let adjR = Array.from({length: N+1}, () => []);
for(let i = 0; i < M; i += 1) {
    const [to, end] = input[i].split(' ').map(Number);
    adj[to].push(end);
    adjR[end].push(to);
}
const [S, T] = input[M].split(' ').map(Number);

function DFS(current, array, visited) {
    const stack = [current];

    while (stack.length > 0) {
        const node = stack.pop();

        if (visited[node] === 1) continue;

        visited[node] = 1;

        for (let nextNode of array[node]) {
            stack.push(nextNode);
        }
    }
}

let fromS = Array(N+1).fill(0);
fromS[T] = 1;
DFS(S, adj, fromS);

let fromT = Array(N+1).fill(0);
fromT[S] = 1;
DFS(T, adj, fromT);

let toS = Array(N+1).fill(0);
DFS(S, adjR, toS);

let toT = Array(N+1).fill(0);
DFS(T, adjR, toT);

let count = 0;
for(let i = 1; i < N+1; i += 1) {
    if(fromS[i] === 1&& fromT[i] === 1 && toS[i] === 1 && toT[i] === 1) count += 1;
}

console.log(count - 2);
