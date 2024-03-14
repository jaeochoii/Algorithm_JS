const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const GEAR = input.shift().split(' ').map(Number);

let isAsc = false;
let isDesc = false;

for(let i = 0; i < 7; i += 1) {

    if(isAsc === true && GEAR[i] - GEAR[i+1] !== -1) {
        console.log('mixed');
        return;
    }

    else if(isDesc === true && GEAR[i] - GEAR[i+1] !== 1) {
        console.log('mixed');
        return;
    }

    if(GEAR[i] - GEAR[i+1] === -1) {
        isAsc = true;
    }
        
    else if(GEAR[i] - GEAR[i+1] === 1) {
        isDesc = true;
    }
}

if(isAsc) {
    console.log('ascending');
    return;
}

else if(isDesc) {
    console.log('descending');
    return;
}
