const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();
const inputOrder = input.shift().split(' ').map(Number).sort((a,b) => a - b);

let reduceNumber = [];
let reduce = 0;

for(let i = 0; i < inputOrder.length; i += 1) {
    reduceNumber.push(reduce += inputOrder[i]);
}

const result = reduceNumber.reduce((acc, cur) => {
    return acc + cur;
}, 0);

console.log(result);