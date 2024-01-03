const fs = require('fs');
const  input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const COUNT = Number(input.shift());

function OneLine(input) {
    let answer = Array.from({length: COUNT}).fill(0);
    const enterArr = input.shift().split(' ').map(Number);

    for(let i = 0; i < enterArr.length; i += 1) {
        let count = 0;
        for(let j = 0; j < answer.length; j += 1) {
            if(answer[j] === 0 && count === enterArr[i]) {
                answer[j] = i+1;
                break;
            }
            else if(answer[j] === 0) count += 1;
        }
    }

    console.log(answer.join(' '));
}

OneLine(input);