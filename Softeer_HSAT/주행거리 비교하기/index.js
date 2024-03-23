const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const inputNumber = input.shift().split(' ').map(Number);

if(inputNumber[0] > inputNumber[1]) {
    console.log('A');
    return;
}
else if(inputNumber[0] < inputNumber[1]) {
    console.log('B');
    return;
}
else {
    console.log('same');
    return;
}
