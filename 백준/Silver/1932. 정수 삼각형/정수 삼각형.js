const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();
let inputArray = [];
input.forEach((value) => inputArray.push(value.split(' ').map(Number)));

for(let i = 1; i <inputArray.length; i += 1) {
    for(let j = 0; j < inputArray[i].length; j += 1) {
        if(j === 0) {
            inputArray[i][j] += inputArray[i-1][0];
        }

        else if(j === inputArray[i].length - 1) {
            inputArray[i][j] += inputArray[i-1][inputArray[i-1].length - 1];
        }

        else {
            inputArray[i][j] += Math.max(inputArray[i-1][j-1], inputArray[i-1][j]);
        }
    }
}

console.log(Math.max(...inputArray[inputArray.length - 1]));