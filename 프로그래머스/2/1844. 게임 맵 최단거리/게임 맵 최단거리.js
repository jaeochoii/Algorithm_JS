function solution(maps) {
    const N = maps.length;
    const M = maps[0].length;
    
    const result = BFS(N, M, maps);
    if(result === 0) return -1;
    else return result;
}

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

function BFS(n, m, board) {
    let queue = new Queue();
    queue.push([0, 0]);
    
    const dX = [-1, 1, 0, 0];
    const dY = [0, 0, -1, 1];
    
    let visited = Array.from({length: n}, () => Array(m).fill(0));
    visited[0][0] = 1;
    
    while(queue.size()) {
        const [X, Y] = queue.popLeft();
        
        for(let i = 0; i < 4; i += 1) {
            const [aX, aY] = [X + dX[i], Y + dY[i]];
            
            if(aX < 0 || aX >= n || aY < 0 || aY >= m || board[aX][aY] === 0 || visited[aX][aY]) continue;
            
            else {
                visited[aX][aY] = visited[X][Y] + 1;
                queue.push([aX, aY])
            }
        }
    }
    
    return visited[n-1][m-1];
}