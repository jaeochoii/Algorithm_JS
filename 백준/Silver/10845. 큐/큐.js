const fs = require('fs');
const  input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function printQueue(input){
    input.shift();
    let arr = [];
    let answerArr = [];

    const commands = input.map((value) => value.split(' '));

    commands.forEach((command) => {
        if(command[0] === 'push') arr.push(command[1]);
        if(command[0] === 'pop' && arr.length === 0) answerArr.push(-1);
        if(command[0] === 'pop' && arr.length !== 0) answerArr.push(arr.shift());
        if(command[0] === 'size') answerArr.push(arr.length);
        if(command[0] === 'empty' && arr.length === 0) answerArr.push(1);
        if(command[0] === 'empty' && arr.length !== 0) answerArr.push(0);
        if(command[0] === 'front' && arr.length !== 0) answerArr.push(arr[0]);
        if(command[0] === 'front' && arr.length === 0) answerArr.push(-1);
        if(command[0] === 'back' && arr.length !== 0) answerArr.push(arr[arr.length -1]);
        if(command[0] === 'back' && arr.length === 0) answerArr.push(-1);
    })

    const answer = answerArr.join('\n');

    console.log(answer);
}

printQueue(input);

