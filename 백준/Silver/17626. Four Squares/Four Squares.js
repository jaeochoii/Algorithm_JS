const fs = require('fs');
// const  input = fs.readFileSync('example.txt').toString().trim().split('\n');
const input = Number(fs.readFileSync('/dev/stdin'));

function DP(number) {
    let dpArr = [0, 1];

    for(let i = 2; i <= number; i += 1) {
        let min = 10;
        for(let j = 1; j*j <= i; j += 1) {
            min = Math.min(dpArr[i - j*j], min);
        }
        dpArr[i] = min + 1;
    }

    return dpArr[number];
}

console.log(DP(input));