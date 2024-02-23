let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input.shift());
let listArray = [];
input.forEach((value) => listArray.push(value.split('')));

let count = 0;

for(let i = 0; i < N; i += 1) {
    let alphaArray = Array(26).fill(0);
    let isPossible = true;

    for(let j = 0; j < listArray[i].length; j += 1) {
        const index = listArray[i][j].charCodeAt(0) - 97;

        if(listArray[i][j] === listArray[i][j-1]) continue;

        if(alphaArray[index] === 0) alphaArray[index] += 1
        else {
            isPossible = false;
            break;
        }
    }

    if(isPossible) count += 1;
}

console.log(count);