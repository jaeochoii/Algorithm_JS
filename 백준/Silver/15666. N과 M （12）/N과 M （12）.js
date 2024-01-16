let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
const [N, M] = input.shift().split(' ').map(Number);
const numberArr = input.shift().split(' ').map(Number).sort((a,b) => a-b);
let visited = Array(N).fill(false);

let answer = [];
let result = [];
function backTrack(start) {
    if(answer.length === M) {
        result.push(answer.join(' '));
        return;
    }

    for(let i = start; i < N; i += 1) {
            answer.push(numberArr[i]);
            backTrack(i);
            answer.pop();
    }
}

backTrack(0);

const RESULT = new Set(result);
console.log([...RESULT].join('\n'));