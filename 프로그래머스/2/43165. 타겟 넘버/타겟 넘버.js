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

function solution(numbers, target) {
    let queue = new Queue;
    queue.push(0);
    let count = 0;
    
    for(let i = 0; i < numbers.length; i += 1) {
        const number = numbers[i];
        const LENGTH = queue.size();
        
        for(let j = 0; j < LENGTH; j += 1) {
            const N = queue.popLeft();
            if(i === numbers.length - 1 && N + number === target) count += 1;
            if(i === numbers.length - 1 && N - number === target) count += 1;
            queue.push(N + number);
            queue.push(N - number);
        }
    }
    return count;
}