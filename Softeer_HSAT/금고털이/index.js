const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [W, N] = input.shift().split(' ').map(Number);

let array = [];
input.forEach((value) => array.push(value.split(' ').map(Number)));
array.sort((a,b) => b[1] - a[1]);

let cost = 0;

for(let i = 0; i < N; i += 1) {
    
    if(W - array[i][0] >= 0) {
        cost += array[i][0] * array[i][1];
        W -= array[i][0];
    }
    else {
        cost += (W * array[i][1]);
        W = 0;
        break;
    }
}

console.log(cost);
