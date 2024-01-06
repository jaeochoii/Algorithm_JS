const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input.shift());
input.shift();

let answer = [];

function dfs(graph, v, visit) {
    visit[v] = true;
    answer.push(v);

    for (let node of graph[v]) {
        if (!visit[node]) {
            dfs(graph, node, visit);
        }
    }
}


const array = input.map((value) => value.split(' ').map(Number));
const graph = [...new Array(N + 1)].map(() => []);
const visited = Array(graph.length).fill(false);

for(let i = 0; i < array.length; i += 1) {
    graph[array[i][0]].push(array[i][1]);
    graph[array[i][1]].push(array[i][0]);
}

dfs(graph, 1, visited);

console.log(answer.length - 1);
