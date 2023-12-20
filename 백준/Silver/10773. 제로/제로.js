const fs = require('fs');
const  input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

input.shift();

function zeroGame(input) {
    let stack = [];

    for(let i = 0; i < input.length; i += 1) {
        if(Number(input[i]) === 0 && stack.length === 0) stack.push(0);
        if(Number(input[i]) === 0 && stack.length !== 0) stack.pop();
        else stack.push(Number(input[i]));
    }

    console.log(stack.reduce((acc, cur) => {
        return acc + cur;
    }, 0));
}

zeroGame(input);