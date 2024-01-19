let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
const N = Number(input.shift());
const array = [];
input.forEach((value) => array.push(value.split(' ').map(Number)));

let answer = [];

for(let i = 0; i < N; i += 1) {
    let count = 1;
    let [X, Y] = array[i];

    for(let j = 0; j < N; j += 1) {
        if(X < array[j][0] && Y < array[j][1]) count += 1;
    }

    answer.push(count);
}

console.log(answer.join(' '));