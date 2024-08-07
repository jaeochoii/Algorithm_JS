let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [N, M, X] = input.shift().split(' ').map(Number);

let goGraph = Array.from({length: N + 1}, () => []);
let comeGraph = Array.from({length: N + 1}, () => []);

for(let i = 0; i < M; i += 1) {
    const [start, end, weight] = input[i].split(' ').map(Number);
    goGraph[start].push([weight, end]);
    comeGraph[end].push([weight, start]);
}

// MinHeap 구현
class MinHeap {
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    swap(idx1, idx2) {
        [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
    }

    add(value) {
        this.heap.push(value);
        this.bubbleUp();
    }

    poll() {
        if(this.heap.length === 1) return this.heap.pop();

        const value = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return value;
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        let parentIndex = Math.floor((index - 1) / 2);

        while(this.heap[parentIndex] && this.heap[index] < this.heap[parentIndex]) {
            this.swap(index, parentIndex);
            index = parentIndex;
            parentIndex = Math.floor((index - 1) / 2);
        }
    }

    bubbleDown() {
        let index = 0;
        let leftIndex = index * 2 + 1;
        let rightIndex = index * 2 + 2;

        while((this.heap[leftIndex] && this.heap[index] > this.heap[leftIndex]) || (this.heap[rightIndex] && this.heap[index] > this.heap[rightIndex])) {
            let smallIndex = leftIndex;

            if(this.heap[smallIndex] > this.heap[rightIndex]) smallIndex = rightIndex;

            this.swap(index, smallIndex);
            index = smallIndex;
            leftIndex = index * 2 + 1;
            rightIndex = index * 2 + 2;
        }
    }
}

// 다익스트라 알고리즘
function DKS(graph) {
    let minQueue = new MinHeap();
    minQueue.add([0, X]);

    let distance = Array(N + 1).fill(Infinity);
    distance[X] = 0;

    while(minQueue.size()) {
        const [dist, node] = minQueue.poll();

        if(distance[node] < dist) continue;

        for(const [weight, newNode] of graph[node]) {
            const cost = dist + weight;

            if(distance[newNode] > cost) {
                distance[newNode] = cost;
                minQueue.add([cost, newNode]);
            }
        }
    }
    return distance;
}

// 최종 계산
let result = [];
const goDistance = DKS(goGraph);
const comeDistance = DKS(comeGraph);

for(let i = 1; i <= N; i += 1) {
    result.push(goDistance[i] + comeDistance[i]);
}

console.log(Math.max(...result));
