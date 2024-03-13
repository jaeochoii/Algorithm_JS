const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [H, W] = input.shift().split(' ').map(Number);
const BOARD = [];
input.forEach((value) => BOARD.push(value.split('')));

// Queue 기능 구현
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

// # 시작점이 어딘지 찾기
let queue = new Queue();
let visited = Array.from({length: H}, () => Array(W).fill(false));

const dX = [-1, 1, 0, 0]; // 북 남 서 동
const dY = [0, 0, -1, 1];
let fX, fY;

let shouldBreak = false;

for(let i = 0; i < H; i += 1) {
    if(shouldBreak) break;
    
    for(let j = 0; j < W; j += 1) {
        if(BOARD[i][j] === '#') {
            queue.push([i, j]);
            visited[i][j] = true;
            fX = i;
            fY = j;
            shouldBreak = true;
            break;
        }
    }
}

while(queue.size()) {
    const [X, Y] = queue.popLeft();

    for(let i = 0; i < 4; i += 1) {
        const [aX, aY] = [X + dX[i], Y + dY[i]];
        if(aX < 0 || aY < 0 || aX >= H || aY >= W || BOARD[aX][aY] === '.' || visited[aX][aY]) continue;
        else if(BOARD[aX][aY] === '#' && !visited[aX][aY]){
            queue.push([aX, aY]);
            visited[aX][aY] = true;
            [fX, fY] = [aX, aY];
        }
    }
}

console.log(`${fX+1} ${fY+1}`);

let rotate;

if(fX-1 >= 0 && visited[fX-1][fY]) {
    rotate = 0;
    console.log('^');
}

if(fX+1 < H && visited[fX+1][fY]) {
    rotate = 1;
    console.log('v');
}

if(fY-1 >= 0 && visited[fX][fY-1]) {
    rotate = 2;
    console.log('<');
}

if(fY+1 < W && visited[fX][fY+1]) {
    rotate = 3;
    console.log('>');
}

// 본격적인 이동방향 구하기

let answer = '';

let newQueue = new Queue();
newQueue.push([fX, fY]);
visited[fX][fY] = false;

const nX = [-1, 1, 0, 0];
const nY = [0, 0, -1, 1];

while(newQueue.size()) {
    const [X, Y] = newQueue.popLeft();

    for(let i = 0; i < 4; i += 1) {
        const [aX, aY] = [X + nX[i], Y + nY[i]];

        if(aX < 0 || aX >= H || aY < 0 || aY >= W || BOARD[aX][aY] === '.' || !visited[aX][aY]) continue;
            
        else {
          
            if(rotate === i) {
                answer += 'A';
                newQueue.push([aX + nX[i], aY + nY[i]]);
                visited[aX][aY] = false;
                visited[aX + nX[i]][aY + nY[i]] = false;
            }

            else if(rotate !== i) {
              
                if((rotate === 0 && i === 2) || (rotate === 1 && i === 3) || (rotate === 2 && i === 1) || (rotate === 3 && i === 0)) {
                    answer += 'LA';
                    newQueue.push([aX + nX[i], aY + nY[i]]);
                    visited[aX][aY] = false;
                    visited[aX + nX[i]][aY + nY[i]] = false;
                    rotate = i;
                }
                else if((rotate === 0 && i === 3) || (rotate === 1 && i === 2) || (rotate === 2 && i === 0) || (rotate === 3 && i === 1)) {
                    answer += 'RA';
                    newQueue.push([aX + nX[i], aY + nY[i]]);
                    visited[aX][aY] = false;
                    visited[aX + nX[i]][aY + nY[i]] = false;
                    rotate = i;
                }
            }
        }
    }
}

console.log(answer);
