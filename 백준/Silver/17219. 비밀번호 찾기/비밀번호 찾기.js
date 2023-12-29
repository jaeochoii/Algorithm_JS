const fs = require('fs');
const  input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input) {
    const [N, M] = input.shift().split(' ').map(Number);
    const map = new Map();

    for(let i = 0; i < N; i += 1) {
        const [A, P] = input[i].split(' ');
        map.set(A, P);
    }

    let answer = [];

    for(let i = N; i < input.length; i += 1) {
        answer.push(map.get(input[i]));
    }


    console.log(answer.join('\n'));
}

solution(input);