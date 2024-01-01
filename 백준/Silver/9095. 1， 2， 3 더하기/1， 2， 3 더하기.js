const fs = require('fs');
const  input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

input.shift();
let fiboArr = [0];

let answer = [];

for(let i = 0; i < input.length; i += 1) {
    answer.push(fibonacci(Number(input[i])));
}
function fibonacci(number) {
    if(number === 1) fiboArr[number] = 1;
    if(number === 2) fiboArr[number] = 2;
    if(number === 3) fiboArr[number] = 4;

    if(!fiboArr[number]) {
        fiboArr[number] = fibonacci(number - 3) + fibonacci(number - 2) + fibonacci(number - 1);
    }

    return fiboArr[number];
}
console.log(answer.join('\n'));