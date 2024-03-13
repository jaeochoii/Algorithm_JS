const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let sum = 0;

for(let i = 0; i < input.length; i += 1) {
    const [toHour, endHour] = input[i].split(' ');
    const [toH, toM] = toHour.split(':');
    const [endH, endM] = endHour.split(':');

    sum += (endH - toH) * 60;
    sum += endM - toM;
}

console.log(sum);
