const [_, ...inputs] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((num) => +num);

class Heap {
    constructor() {
        this.heap = [null];
    }

    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [
            this.heap[index2],
            this.heap[index1],
        ];
    }

    compare(parent, child) {
        if (Math.abs(this.heap[parent]) === Math.abs(this.heap[child])) {
            if (this.heap[parent] > this.heap[child]) return true;
            else return false;
        } else if (Math.abs(this.heap[parent]) > Math.abs(this.heap[child])) {
            return true;
        }

        return false;
    }

    push(value) {
        this.heap.push(value);
        if (this.heap.length === 2) return;

        let currentIndex = this.heap.length - 1;
        let parentIndex = Math.floor(currentIndex / 2);

        while (this.compare(parentIndex, currentIndex) && parentIndex !== 0) {
            this.swap(currentIndex, parentIndex);

            currentIndex = parentIndex;
            parentIndex = Math.floor(currentIndex / 2);
        }
    }

    pop() {
        if (this.heap.length === 1) return 0;
        if (this.heap.length === 2) return this.heap.pop();

        const returnValue = this.heap[1];
        this.heap[1] = this.heap.pop();

        let currentIndex = 1;
        let leftIndex = 2;
        let rightIndex = 3;

        while (
            (this.heap[leftIndex] && this.compare(currentIndex, leftIndex)) ||
            (this.heap[rightIndex] && this.compare(currentIndex, rightIndex))
            ) {
            if (this.compare(leftIndex, rightIndex)) {
                this.swap(currentIndex, rightIndex);
                currentIndex = rightIndex;

            } else {
                this.swap(currentIndex, leftIndex);
                currentIndex = leftIndex;
            }

            leftIndex = currentIndex * 2;
            rightIndex = currentIndex * 2 + 1;
        }

        return returnValue;
    }
}

let result = "";
const heap = new Heap();

inputs.forEach((input) => {
    if (input === 0) {
        result += heap.pop() + "\n";
    } else {
        heap.push(input);
    }
});

console.log(result);
