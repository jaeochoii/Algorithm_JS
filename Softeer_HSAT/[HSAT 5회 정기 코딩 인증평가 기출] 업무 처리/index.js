const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [H, K, R] = input.shift().split(' ').map(Number);
let tasks = [];
let tasks2 = [];
for(let i = 0; i < 2**H; i += 1) {
    tasks.push(input[i].split(' ').map(Number));
}

function merge(list1, list2) {
    let list = [];
    for(let i = 0; i < list1.length; i += 1) {
        list.push(list1[i]);
        list.push(list2[i]);
    }
    return list;
}

for(let i = 1; i <= H; i += 1) {
    tasks2 = [];
    for(let j = 0; j < 2**(H-1); j += 1) {
        if(i%2) tasks2.push(merge(tasks[2*j+1], tasks[2*j]));
        else tasks2.push(merge(tasks[2*j], tasks[2*j+1]));
    }
    tasks = tasks2;
}


let sum = 0;

if(H%2) {
    for(let i = 0; i < R-H && i < tasks2[0].length; i += 1) {
        sum += tasks2[0][i];
    }
}
else {
    for(let i = 0; i < R-H && i < tasks[0].length; i += 1) {
        sum += tasks[0][i];
    }
}

console.log(sum);
