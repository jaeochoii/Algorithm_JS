const fs = require('fs');
const  input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [X, Y] = input.shift().split(' ').map(Number);
let [curX, curY, loc] = input.shift().split(' ').map(Number);
const board = input.map(array => array.split(' ').map(Number));
const visited = Array.from({length: X}, () => Array.from({length: Y}, () => false));
let count = 0;
let turn = 0;

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

while(1) {
    if(turn === 4) {
        const [backX, backY] = [curX + dx[(loc + 6) % 4], curY + dy[(loc + 6) % 4]];
        if(board[backX][backY] === 1) break;
        else {
            curX = backX;
            curY = backY;
            turn = 0;
        }
    }

    if(!visited[curX][curY]) {
        visited[curX][curY] = true;
        board[curX][curY] = 2;
        count += 1;
    }

    const [leftX, leftY] = [curX + dx[(loc + 3) % 4], curY + dy[(loc + 3) % 4]];
    if(board[leftX][leftY] === 0) {
        curX = leftX;
        curY = leftY;
        turn = 0;
    } else {
        turn += 1;
    }
    loc = (loc + 3) % 4;
}

console.log(count);