const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

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

const N = Number(input.shift());
let cars = [];

for(let i = 0; i < N; i += 1) {
    const [T, P] = input[i].split(' ');
    cars.push([i, Number(T), P]);
}
cars.push([N+1, 10**9+1, 'A']);

let carIndex = 0;
let answer = Array(N).fill(-1);

let deque = [];
for(let i = 0; i < 4; i += 1) {
    deque.push(new Queue());
}

let currentTime = 0;

while(currentTime <= 10**9) {
    let tempCar = cars[carIndex];
    let [number, time, w] = tempCar;

    while(time <= currentTime) {
        if(w === 'A') deque[0].push(tempCar);
        else if(w === 'B') deque[1].push(tempCar);
        else if(w === 'C') deque[2].push(tempCar);
        else deque[3].push(tempCar);

        carIndex += 1;
        tempCar = cars[carIndex];
        [number, time, w] = tempCar;
    }

    if(deque[0].size() !== 0 && deque[1].size() !== 0 && deque[2].size() !== 0 && deque[3].size() !== 0) break;
    if(deque[0].size() === 0 && deque[1].size() === 0 && deque[2].size() === 0 && deque[3].size() === 0) {
        currentTime = time;
        continue;
    }

    for(let i = 0; i < 4; i += 1) {
        if(deque[i].size() !== 0 && deque[(i+3) % 4].size() === 0) {
            let x = deque[i].popLeft();
            answer[x[0]] = currentTime;

            if(deque[(i+2) % 4].size() !== 0 && deque[(i+1)%4].size() === 0) {
                let y = deque[(i+2)%4].popLeft();
                answer[y[0]] = currentTime;
            }
            
            break;
        }
    }
    currentTime += 1;
}

console.log(answer.join('\n'));
