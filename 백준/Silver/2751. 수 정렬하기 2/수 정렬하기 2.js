const fs = require('fs');
const  input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');


function sort(input){
    input.shift();

    const answer = input.sort((a, b) => a-b);

    console.log(answer.join('\n'));
}

sort(input);