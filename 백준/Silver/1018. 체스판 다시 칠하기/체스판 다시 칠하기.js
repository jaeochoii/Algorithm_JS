const fs = require('fs');
const  input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const XY = input.shift().split(' ');
const X = Number(XY[0]);
const Y = Number(XY[1]);
const answer = [];

const whiteFirst = [
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
];

const blackFirst = [
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
];

function paintWhiteFirst(x, y) {
    let count = 0;

    for(let i = y; i < y+8; i += 1){
        for(let j = x; j < x+8; j += 1){
            if(input[i][j] !== whiteFirst[i - y][j - x]) count += 1;
        }
    }

    return count;
}

function paintBlackFirst(x, y) {
    let count = 0;

    for(let i = y; i < y+8; i += 1){
        for(let j = x; j < x+8; j += 1){
            if(input[i][j] !== blackFirst[i - y][j - x]) count += 1;
        }
    }

    return count;
}

for(let i = 0; i < X-7; i += 1){
    for (let j = 0; j < Y-7; j += 1){
        answer.push(paintWhiteFirst(j, i));
        answer.push(paintBlackFirst(j, i));
    }
}

console.log(Math.min(...answer));
