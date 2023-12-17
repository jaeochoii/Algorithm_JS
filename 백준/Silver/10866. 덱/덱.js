const fs = require('fs');
const  input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function deque(input){
    input.shift();
    let answer = [];

    const deque = new Deque();

    const commands = input.map((value) => value.split(' '));

    commands.forEach((value) => {
        if(value[0] === 'push_front') deque.pushFront(value[1]);
        if(value[0] === 'push_back') deque.pushBack(value[1]);
        if(value[0] === 'pop_front') answer.push(deque.popFront());
        if(value[0] === 'pop_back') answer.push(deque.popBack());
        if(value[0] === 'empty') answer.push(deque.rear - deque.front === 0 ? 1 : 0);
        if(value[0] === 'size') answer.push(deque.rear - deque.front);
        if(value[0] === 'front') answer.push(deque.front >= deque.rear ? -1 : deque.arr[deque.front]);
        if(value[0] === 'back') answer.push(deque.front >= deque.rear ? -1 : deque.arr[deque.rear - 1]);
    })

    console.log(answer.join('\n'));
}

class Deque {
    constructor() {
        this.arr = [];
        this.front = 0;
        this.rear = 0;
    }

    pushFront(item) {
        if (this.arr[0]) {
            for (let i = this.arr.length; i > 0; i--) {
                this.arr[i] = this.arr[i - 1];
            }
        }
        this.arr[this.front] = item;
        this.rear += 1;
    }

    pushBack(item) {
        this.arr[this.rear++] = item;
    }

    popFront() {
        const result = this.front >= this.rear ? -1 : this.arr[this.front++];
        return result;
    }

    popBack() {
        const result = this.front >= this.rear ? -1 : this.arr[--this.rear];
        return result;
    }
}

deque(input);

