let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number);
const [N, M] = input;

let answer = [];
function backTrack(start) {
    if(answer.length === M) {
        console.log(answer.join(' '));
        return;
    }

    for(let i = start; i <= N; i += 1) {
        answer.push(i);
        backTrack(i);
        answer.pop();
    }
}

backTrack(1);
