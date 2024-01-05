const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let N = Number(input.shift());
let board = input.map((value) => value.split(' ').map(Number));
let blueMark = 0;
let whiteMark = 0;

divideConquer(board,0, 0, N);
console.log(whiteMark + '\n' + blueMark);

function divideConquer(arr, X, Y, N) {
    let divide = N / 2;
    let location = arr[X][Y];

    for(let i = X; i < X + (divide*2); i += 1) {
        for(let j = Y; j < Y + (divide*2); j += 1) {
            if(arr[i][j] !== location) {
                divideConquer(arr, X, Y, divide);
                divideConquer(arr, X, Y+divide, divide);
                divideConquer(arr, X+divide, Y, divide);
                divideConquer(arr, X+divide, Y+divide, divide);
                return;
            }
        }
    }

    if(location === 1) blueMark += 1;
    if(location === 0) whiteMark += 1;
}