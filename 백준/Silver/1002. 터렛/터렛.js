const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let answer = '';
let T = Number(input.shift());

for(let i=0; i < T; i++) {
    let arr = input[i].split(' ').map(x=>+x);
    // console.log(arr);
    let x1, x2, y1, y2, r1, r2;
    if(arr[2] > arr[5]) {
        r1 = arr[5];
        r2 = arr[2];
        x1 = arr[3];
        x2 = arr[0];
        y1 = arr[4];
        y2 = arr[1];
    } else {
        r1 = arr[2];
        r2 = arr[5];
        x1 = arr[0];
        x2 = arr[3];
        y1 = arr[1];
        y2 = arr[4];
    }
    let sum = r1 + r2;
    let sub = r2 - r1;
    let len = Math.sqrt((x1-x2)**2 + (y1-y2)**2);
    // console.log(sum, len);
    if(sub < len && sum > len) {
        answer += '2' + '\n';
    } else if(sum === len) {
        answer += '1' + '\n';
    } else if(sub === len && len !==0) {
        answer += '1' + '\n';
    } else if(sum < len) {
        answer += '0' + '\n';
    } else if(sub > len) {
        answer += '0' + '\n';
    } else if(len === 0) {
        if(r1 === r2) {
            answer += '-1' + '\n';
        } else {
            answer += '0' + '\n';
        }
    }
}
console.log(answer);