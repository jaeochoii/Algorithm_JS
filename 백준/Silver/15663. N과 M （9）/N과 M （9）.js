let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
const [N, M] = input.shift().split(' ').map(Number);
const numberArr = input.shift().split(' ').map(Number).sort((a,b) => a-b);
let visited = Array(N).fill(false);

let answer = [];
let result = [];
function backTrack() {
    if(answer.length === M) {
        result.push(answer.join(' '));
        return;
    }

    for(let i = 0; i < N; i += 1) {
        if(!visited[i]) {
            answer.push(numberArr[i]);
            visited[i] = true;
            backTrack();
            visited[i] = false;
            answer.pop();
        }
    }
}

backTrack();

const RESULT = new Set(result);
console.log([...RESULT].join('\n'));