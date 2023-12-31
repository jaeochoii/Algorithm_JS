const fs = require('fs');
const  input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();
const inputArr= input.map(Number);

let fiboArr = [0];
let answer = [];

for(let i = 0; i < inputArr.length; i += 1) {
    answer.push(fibonacci(inputArr[i]));
}
function fibonacci(number) {
    if(number <= 3) fiboArr[number] = 1;

    if(!fiboArr[number]) {
        fiboArr[number] = fibonacci(number - 3) + fibonacci(number - 2);
    }

    return fiboArr[number];
}

console.log(answer.join('\n'));