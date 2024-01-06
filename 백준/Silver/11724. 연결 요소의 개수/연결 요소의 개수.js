const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input.shift().split(' ').map(Number);
const graph = Array.from({length: N+1}, () => []);
const array = input.map((value) => value.split(' ').map(Number));
let visited = Array.from({length: N+1}).fill(false);
let count = 0;

for(let i = 0; i < M; i += 1) {
    graph[array[i][0]].push(array[i][1]);
    graph[array[i][1]].push(array[i][0]);
}

for(let i = 1; i <= N; i += 1) {
    if(!visited[i]) {
        DFS(graph, visited, i);
        count += 1;
    }
}

console.log(count);

function DFS(graph, visited, start) {
    const stack = [[start, -1]];

    while(stack.length) {
        let [cur, parent] = stack.pop();

        if(visited[cur]) continue;

        stack.push([cur, parent]);
        visited[cur] = true;

        for(const node of graph[cur]) {
            if(!visited[node]) stack.push([node, cur]);
        }
    }
}