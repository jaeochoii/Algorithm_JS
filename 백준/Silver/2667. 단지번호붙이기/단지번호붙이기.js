const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input.shift());
let board = [];
input.forEach((value) => board.push(value.split('').map(Number)));
let visited = Array.from({length: N}, () => Array(N).fill(false));

class Queue {
    constructor() {
        this.store = {};
        this.front = 0;
        this.rear = 0;
    }

    size() {
        if (this.store[this.rear] === undefined) {
            return 0;
        } else {
            return this.rear - this.front + 1;
        }
    }

    push(value) {
        if (this.size() === 0) {
            this.store['0'] = value;
        } else {
            this.rear += 1;
            this.store[this.rear] = value;
        }
    }

    popLeft() {
        let temp;
        if (this.front === this.rear) {
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
let answer = [];
let COUNT = 0;

for(let i = 0; i < N; i += 1) {
    for(let j = 0; j < N; j += 1) {
        if(board[i][j] === 1 && !visited[i][j]) {
            let co = BFS(i, j);
            answer.push(co);
            COUNT += 1;
        }
    }
}

function BFS(x, y) {
    let queue = new Queue();
    queue.push([x, y]);
    let count = 0;

    const dX = [-1, 1, 0, 0];
    const dY = [0, 0, -1, 1];

    while(queue.size()) {
        const [X, Y] = queue.popLeft();
        count += 1;
        visited[X][Y] = true;

        for(let i = 0; i < 4; i += 1) {
            const [aX, aY] = [X + dX[i], Y + dY[i]];

            if(aX >= 0 && aX < N && aY >= 0 && aY < N && !visited[aX][aY] && board[aX][aY]) {
                queue.push([aX, aY]);
                visited[aX][aY] = true;
            }
        }
    }
    return count;
}
answer.sort((a,b) => a-b);
answer.unshift(COUNT);

console.log(answer.join('\n'));