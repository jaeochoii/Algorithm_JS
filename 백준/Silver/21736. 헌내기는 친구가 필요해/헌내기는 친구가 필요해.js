let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
const [N, M] = input.shift().split(' ').map(Number);

let board = [];
input.forEach((value) => board.push(value.split('')));

let visited = Array.from({length: N}, () => Array(M).fill(0));

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
        if(this.size() === 0) {
            this.store['0'] = value;
        }

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

// 도연이의 위치 찾기
let X, Y;

for(let i = 0; i < N; i += 1) {
    for(let j = 0; j < M; j += 1) {
        if(board[i][j] === 'I') [X, Y] = [i, j];
    }
}

// 좌표를 이용한 배열 생성
const dX = [-1, 1, 0, 0];
const dY = [0, 0, -1, 1];

// BFS 이용하기
let queue = new Queue();
queue.push([X, Y]);

let count = 0;
visited[X][Y] = 1;

while(queue.size()) {
    const [x, y] = queue.popLeft();

    for(let i = 0; i < 4; i += 1) {
        const [aX, aY] = [x + dX[i], y + dY[i]];

        if(aX < 0 || aX >= N || aY < 0 || aY >= M || board[aX][aY] === 'X' || visited[aX][aY]) continue;

        else {
            if(board[aX][aY] === 'P') {
                count += 1;
                visited[aX][aY] = 1;
                queue.push([aX, aY]);
            }

            else if(board[aX][aY] === 'O') {
                visited[aX][aY] = 1;
                queue.push([aX, aY]);
            }
        }
    }
}

const result = count === 0 ? 'TT' : count;
console.log(result);