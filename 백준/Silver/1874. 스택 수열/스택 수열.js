const fs = require('fs');
const  input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function stackSequence(input){
    const N = input.shift();

    let answer = [];
    let numberArr = [];
    let i = 1;
    let index = 0;

    while(index < input.length){
        if(numberArr[numberArr.length - 1] === Number(input[index])){
            answer.push('-');
            numberArr.pop();
            index += 1;
        }

        else {
            answer.push('+');
            numberArr.push(i);
            if(i <= N) i += 1;
            else break;
        }
    }

    const result = numberArr.length === 0 ? answer.join('\n') : 'NO';
    console.log(result);
}

stackSequence(input);