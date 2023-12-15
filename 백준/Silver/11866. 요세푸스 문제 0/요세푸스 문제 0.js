const fs = require('fs');
const  input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

function josephus(input){
    let array = [];
    let answer = [];

    for(let i = 1; i <= input[0]; i += 1){
        array.push(i);
    }

    let index = Number(input[1]) - 1;

    while(array.length !== 0){
        answer.push(array[index]);
        array.splice(index, 1);
        index = (index + Number(input[1]) - 1) % array.length;
    }

    console.log(`<${answer.join(', ')}>`);
}

josephus(input);

