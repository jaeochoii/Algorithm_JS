const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M, start] = input.shift().split(' ').map(Number);
const numberArr = input.map((value) => value.split(' ').map(Number));

let graph = Array.from({length: N + 1}, () => []);
let visited = Array.from( {length: N + 1}, () => false);
let visited2 = Array.from( {length: N + 1}, () => false);

let answer = [[], []];

for(let i = 0; i < M; i += 1) {
    graph[numberArr[i][0]].push(numberArr[i][1]);
    graph[numberArr[i][1]].push(numberArr[i][0]);
}

function DFS(graph, start, visited) {
    const stack = [[start, -1]];

    while(stack.length) {
        let [cur, parent] = stack.pop();

        if(visited[cur]) continue;

        stack.push([cur, parent]);
        visited[cur] = true;

        answer[0].push(cur);

        for(const node of graph[cur].sort((a,b) => b-a)) {
            if(!visited[node]) stack.push([node, cur]);
        }
    }
}

function BFS(graph, start, visited) {
    const queue = new Queue();
    queue.push(start);
    visited[start] = true;

    while(queue.size()) {
        const v = queue.popLeft();
        answer[1].push(v);

        for(const node of graph[v].sort((a,b) => a-b)) {
            if(!visited[node]) {
                queue.push(node);
                visited[node] = true;
            }
        }
    }
}

class Queue {
    constructor() {
        this.store = {};
        this.front = 0;
        this.rear = 0;
    }

    size() {
        if(this.store[this.rear] === undefined) return 0;
        else {
            return this.rear - this.front + 1;
        }
    }

    push(value) {
        if(this.size() === 0) this.store['0'] = value;
        else {
            this.rear += 1;
            this.store[this.rear] = value;
        }
    }

    popLeft() {
        let temp;
        if(this.front === this.rear) {
            temp = this.store[this.front];
            delete this.store[this.front];
            this.front = 0;
            this.rear = 0;
            return temp;
        } else {
            temp = this.store[this.front];
            delete this.store[this.front];
            this.front += 1;
            return temp;
        }
    }
}

DFS(graph, start, visited);
BFS(graph, start, visited2);

console.log(answer[0].join(' ') + "\n" + answer[1].join(' '));