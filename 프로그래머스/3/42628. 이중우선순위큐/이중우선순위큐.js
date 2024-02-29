class MinHeap {
    constructor() {
        this.heap = [];
    }
    
    size() {
        return this.heap.length;
    }
    
    swap(idx1, idx2) {
        [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
    }
    
    push(value) {
        this.heap.push(value);
        this.bubbleUp();
    }
    
    pop() {
        this.heap.pop();
    }
    
    poll() {
        if(this.size() === 1) this.pop();
        else {
            const value = this.heap[0];
            this.heap[0] = this.heap.pop();
            this.bubbleDown();
        }
    }
    
    bubbleUp() {
        let index = this.heap.length - 1;
        let parentIndex = Math.floor((index - 1) / 2);
        
        while(this.heap[parentIndex] && this.heap[parentIndex] > this.heap[index]) {
            this.swap(index, parentIndex);
            index = parentIndex;
            parentIndex = Math.floor((index - 1) / 2);
        }
    }
    
    bubbleDown() {
        let index = 0;
        let leftIndex = index * 2 + 1;
        let rightIndex = index * 2 + 2;
        
        while((this.heap[leftIndex] && this.heap[index] > this.heap[leftIndex]) || (this.heap[rightIndex] && this.heap[index] > this.heap[rightIndex])) {
            let smallIndex = leftIndex;
            
            if(this.heap[smallIndex] > this.heap[rightIndex]) smallIndex = rightIndex;
            
            this.swap(index, smallIndex);
            index = smallIndex;
            leftIndex = index * 2 + 1;
            rightIndex = index * 2 + 2;
        }
    }
}

function solution(operations) {
    let heap = new MinHeap();
    
    for(let i = 0; i < operations.length; i += 1) {
        const [command, value] = operations[i].split(' ');
        
        if(command === 'I') heap.push(Number(value));
        
        else if(command === 'D' && heap.size() === 0) continue;
        
        else if(command === 'D' && value === '1') heap.pop();
        
        else if(command === 'D' && value === '-1') heap.poll();
        
    }
    const answer = Object.values(heap)[0];
    
    if(answer.length === 0) return [0, 0];
    else return [Math.max(...answer), Math.min(...answer)];
}