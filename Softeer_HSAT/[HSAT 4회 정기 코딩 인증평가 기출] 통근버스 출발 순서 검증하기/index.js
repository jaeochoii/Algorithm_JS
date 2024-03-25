const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input.shift());
const bus = input.shift().split(' ').map(Number);

let sum = 0;

for(let i = 0; i < N; i += 1) {
    let compare = 0;

    for(let k = i+1; k < N; k += 1) {
        if(bus[i] < bus[k]) compare += 1;
        else sum += compare;
    }
}

console.log(sum);
