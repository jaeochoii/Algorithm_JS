let fs = require('fs');
let input =  fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M, K] = input.shift().split(' ').map(Number);
let board = Array.from({length: N}, () => Array(M).fill(0));
let visited = Array.from({length: N}, () => Array(M).fill(false));

// 기본적인 보드 생성
for(let i = 0; i < K; i += 1) {
    const [leftY, leftX, rightY, rightX] = input[i].split(' ').map(Number);

    for(let j = N - leftX - 1; j >= N - rightX; j -= 1) {
        for(let k = leftY; k <= rightY - 1; k += 1) {
            board[j][k] = 1;
        }
    }
}

// 큐 기능 구현
class Queue {
    constructor() {
        this.store = {};
        this.front = 0;
        this.rear = 0;
    }

    size() {
        if(this.store[this.rear] === undefined) return 0;
        else return this.rear - this.front + 1;
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
        }
        else {
            temp = this.store[this.front];
            delete this.store[this.front];
            this.front += 1;
            return temp;
        }
    }
}

let count = 1;
let width = [];

// visited 값이 false인 곳을 찾기
for(let i = 0; i < N; i += 1) {
    for(let j = 0; j < M; j += 1) {
        if(visited[i][j] === false && board[i][j] === 0) {
            width.push(BFS(i, j, board, visited));
            count = 1;
        }
    }
}

// BFS 구현
function BFS(X, Y, B, V) {
    let queue = new Queue();
    queue.push([X, Y]);
    V[X][Y] = true;

    const dX = [-1, 1, 0, 0];
    const dY = [0, 0, -1, 1];

    while(queue.size()) {
        const [x, y] = queue.popLeft();

        for(let i = 0; i < 4; i += 1) {
            const [aX, aY] = [x + dX[i], y + dY[i]];

            if(aX < 0 || aX >= N || aY < 0 || aY >= M || B[aX][aY] === 1 || V[aX][aY]) continue;

            else {
                count += 1;
                queue.push([aX, aY]);
                V[aX][aY] = true;
            }
        }
    }
    return count;
}
width.sort((a,b) => a-b);
console.log(width.length);
console.log(width.join(' '));