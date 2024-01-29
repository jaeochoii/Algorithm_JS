let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = Number(input.shift());

let answer = [];

for(let i = 0; i < N; i += 1) {
    const [N, M, x, y] = input[i].split(' ').map(Number);

    const standard = LCM(N, M);
    let X = x;
    let Y = y;

    while(true) {
        if(X > standard || Y > standard) {
            answer.push(-1);
            break;
        }
        else if(X > Y) Y += M;
        else if(X < Y) X += N;
        else {
            answer.push(X);
            break;
        }
    }
}

function GCD(a, b) {
    if(b === 0) return a;
    return a > b ? GCD(b, a%b) : GCD(a, b%a);
}

function LCM(a, b) {
    return a*b / GCD(a, b);
}

console.log(answer.join('\n'));