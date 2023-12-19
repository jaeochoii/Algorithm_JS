const fs = require('fs');
const  input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function balanceControl(input) {
    let answer = [];
    const code = ['(', '[', ')', ']'];

    for(let i = 0; i < input.length - 1; i += 1) {
        let stack = [];
        input[i].split('').forEach((value) => {
            if(value === code[0] || value === code[1]) stack.push(value);
            else if(value === code[2] && stack[stack.length - 1] === code[0]) stack.pop();
            else if(value === code[2] && stack[stack.length - 1] !== code[0]) stack.push(value);
            else if(value === code[3] && stack[stack.length - 1] === code[1]) stack.pop();
            else if(value === code[3] && stack[stack.length - 1] !== code[1]) stack.push(value);

        })

        answer.push(stack.length === 0 ? 'yes' : 'no');
    }

    console.log(answer.join('\n'));
}

balanceControl(input);