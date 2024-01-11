const fs = require('fs');
const [START, TARGET] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
let visited = Array(200001).fill(false);
let result = [];
let count = 0;
let isFind = false;

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

let queue = new Queue();
queue.push(START);

while(queue.size()) {
    const LENGTH = queue.size();

    for(let i = 0; i < LENGTH; i += 1) {
        const v = queue.popLeft();
        if(v === TARGET) {
            result.push(count);
            isFind = true;
        }
        visited[v] = true;

        const [minus, plus, multi] = [v-1, v+1, v*2];
        if(!visited[minus] && minus >= 0 && minus <= 100000) queue.push(minus);
        if(!visited[plus] && plus >= 0 && minus <= 100000) queue.push(plus);
        if(!visited[multi] && multi >= 0 && minus <= 100000) queue.push(multi);
    }
    count += 1;
    if(isFind) break;
}

console.log(result[0] + '\n' + result.length);