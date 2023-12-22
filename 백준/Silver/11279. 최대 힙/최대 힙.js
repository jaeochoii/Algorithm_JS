const fs = require('fs');
const  input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

input.shift();

function solution(input) {
    const heap = new MaxHeap();

    const numberArr = input.map(Number);

    let answer = [];

    numberArr.forEach((value) => {
        if (value !== 0) heap.heapPush(value);
        if (value === 0 && heap.heapReturn().length === 1) answer.push(0);
        else if(value === 0 && heap.heapReturn().length !== 1) answer.push(heap.heapPop());
    })

    console.log(answer.join('\n'));
}

class MaxHeap {
    constructor() {
        this.heap = [null]; // 이해하기 쉽게 0번째 Index는 null
    }

    heapPush(value) {
        this.heap.push(value);
        let currentIndex = this.heap.length - 1;
        let parentIndex = Math.floor(currentIndex / 2);

        while (parentIndex !== 0 && this.heap[parentIndex] < value) {
            const temp = this.heap[parentIndex];
            this.heap[parentIndex] = this.heap[currentIndex];
            this.heap[currentIndex] = temp;
            currentIndex = parentIndex;
            parentIndex = Math.floor(currentIndex / 2);
        }
    }

    heapPop() {
        // 루트 노드밖에 없는 경우
        if (this.heap.length === 2) return this.heap.pop();

        let returnValue = this.heap[1];
        this.heap[1] = this.heap.pop();
        let currentIndex = 1;
        let leftIndex = 2;
        let rightIndex = 3;

        while (this.heap[currentIndex] < this.heap[leftIndex] ||
            this.heap[currentIndex] < this.heap[rightIndex]
            ) {
            const temp = this.heap[currentIndex];

            if (this.heap[leftIndex] < this.heap[rightIndex]) {
                this.heap[currentIndex] = this.heap[rightIndex];
                this.heap[rightIndex] = temp;
                currentIndex = rightIndex;
            } else {
                this.heap[currentIndex] = this.heap[leftIndex];
                this.heap[leftIndex] = temp;
                currentIndex = leftIndex;
            }

            leftIndex = currentIndex * 2;
            rightIndex = leftIndex + 1;
        }

        return returnValue;
    }

    heapReturn() {
        return this.heap;
    }
}

solution(input);
