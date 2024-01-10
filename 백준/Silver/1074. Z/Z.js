const fs = require('fs');
const [LEN, X, Y] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
let answer = 0;

function Divide(length, x, y) {
    let standard = 2 ** (length - 1);

    if(x < standard && y < standard) answer += (standard ** 2) * 0;
    else if(x < standard && y >= standard) answer += (standard ** 2) * 1;
    else if(x >= standard && y < standard) answer += (standard ** 2) * 2;
    else if(x >= standard && y >= standard) answer += (standard ** 2) * 3;

    if(length > 1) Divide(length - 1, x % standard, y % standard);
}

Divide(LEN, X, Y);

console.log(answer);