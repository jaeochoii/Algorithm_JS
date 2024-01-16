let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
const [N, M] = input.shift().split(' ').map(Number);
const numberArr = input.shift().split(' ').map(Number).sort((a,b) => a-b);

let answer = [];
function backTrack() {
    if(answer.length === M) {
        console.log(answer.join(' '));
        return;
    }

    for(let i = 0; i < N; i += 1) {
        if(!answer.includes(numberArr[i])) {
            answer.push(numberArr[i]);
            backTrack(numberArr[i+1]);
            answer.pop();
        }
    }
}

backTrack();