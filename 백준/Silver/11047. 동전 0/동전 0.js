const fs = require('fs');
const  input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, MONEY] = input.shift().split(' ').map(Number);

let pocket = input.sort((a, b) => a-b).map(Number);
let count = 0;

while(pocket.length !== 0) {
    if(Math.floor(MONEY / pocket[pocket.length - 1]) === 0) pocket.pop();
    else {
        count += Math.floor(MONEY / pocket[pocket.length - 1]);
        MONEY = MONEY % pocket[pocket.length - 1];
        pocket.pop();
    }
}

console.log(count);