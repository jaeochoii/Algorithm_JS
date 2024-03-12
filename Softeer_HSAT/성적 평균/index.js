const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, K] = input.shift().split(' ').map(Number);
const GRADES = input.shift().split(' ').map(Number);

for(let i = 0; i < K; i += 1) {
    const [START, END] = input[i].split(' ').map(Number);
    let sum = 0;
    let count = END - START + 1;
    for(let j = START - 1; j <= END - 1; j += 1) {
        sum += GRADES[j];
    }
    console.log((sum / count).toFixed(2));
}
