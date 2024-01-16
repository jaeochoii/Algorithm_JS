let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
const [N, M] = input.shift().split(' ').map(Number);
const numberArr = input.shift().split(' ').map(Number).sort((a,b) => a-b);

let answer = [];
function backTrack(start) {
    if(answer.length === M) {
        console.log(answer.join(' '));
        return;
    }

    for(let i = start; i < N; i += 1) {
        answer.push(numberArr[i]);
        backTrack(i);
        answer.pop();
    }
}

backTrack(0);