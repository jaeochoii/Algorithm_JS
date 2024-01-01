const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
// const  input = fs.readFileSync('example.txt').toString().trim().split('\n');

let fiboArr = [0];
function fibonacci(number) {
    if(number === 1) fiboArr[number] = 1;
    if(number === 2) fiboArr[number] = 3;

    if(!fiboArr[number]) {
        fiboArr[number] = (fibonacci(number - 2) + fibonacci(number - 2) + fibonacci(number - 1)) % 10007;
    }

    return fiboArr[number];
}
console.log(fibonacci(Number(input)));