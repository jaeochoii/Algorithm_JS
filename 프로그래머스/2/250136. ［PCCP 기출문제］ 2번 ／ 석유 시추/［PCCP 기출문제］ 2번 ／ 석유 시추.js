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


function SetBFS(x, y, N, M, board, visited) {
    let queue = new Queue();
    let array = Array(M).fill(0);
    let indexArr = [];
    
    queue.push([x, y]);
    visited[x][y] = 1;
    
    indexArr.push(y);
    
    const dX = [-1, 1, 0, 0];
    const dY = [0, 0, -1, 1];
    
    let count = 1;
    
    while(queue.size()) {
        const [X, Y] = queue.popLeft();
        
        for(let i = 0; i <4; i += 1) {
            const [aX, aY] = [X + dX[i], Y + dY[i]];
            
            if(aX < 0 || aX >= N || aY < 0 || aY >= M || visited[aX][aY] || board[aX][aY] === 0) continue;
            
            else {
                visited[aX][aY] = 1;
                queue.push([aX, aY]);
                count += 1;
                if(!indexArr.includes(aY)) indexArr.push(aY);
            }
        }
    }
    
    
    for(let i = 0; i < indexArr.length; i += 1) {
        array[indexArr[i]] = count;
    }
    
    return array;
}

function solution(land) {
    const X = land.length;
    const Y = land[0].length;
    let visit = Array.from({length: X}, () => Array(Y).fill(0));
    let answer = [];
    
    for(let i = 0; i < X; i += 1) {
        for(let j = 0; j < Y; j += 1) {
            if(land[i][j] === 1 && !visit[i][j]) {
                answer.push(SetBFS(i, j, X, Y, land, visit));
            }
        }
    }
    let result = 0;
    
    for(let j = 0; j < Y; j += 1) {
        let sum = 0;
        
        for(let i = 0; i < answer.length; i += 1) {
            sum += answer[i][j];
        }
        
        result = Math.max(result, sum);
    }
    
    return result;
}