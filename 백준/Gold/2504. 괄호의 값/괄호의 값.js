let fs = require('fs');
let input =  fs.readFileSync('/dev/stdin').toString().trim();

let inputArr = input.split('');
let stack = [];
let answer = 0;
let sum = 0;

for(let i = 0; i < inputArr.length; i += 1) {

    // 4개의 괄호가 아닌 다른 문자나 숫자가 들어온 경우 에러처리를 한다
    if(inputArr[i] === '(' || inputArr[i] === ')' || inputArr[i] === '[' || inputArr[i] === ']') {
        // 여는 괄호인 경우
        if(inputArr[i] === '(' || inputArr[i] === '[') stack.push(inputArr[i]);

        // 닫는 괄호(')')인 경우
        else if(inputArr[i] === ')') {
            while(stack[stack.length - 1] % 1 === 0) {
                if(stack[stack.length - 1] % 1 === 0) {
                    sum += stack.pop();
                }
            }
            if(stack[stack.length - 1] === '(') {
                stack.pop();
                sum === 0 ? stack.push(2) : stack.push(sum * 2);
                sum = 0;
            }
            else stack.push(inputArr[i]);
        }

        // 닫는 괄호('(')인 경우
        else if(inputArr[i] === ']') {
            while(stack[stack.length - 1] % 1 === 0) {
                if(stack[stack.length - 1] % 1 === 0) {
                    sum += stack.pop();
                }
            }
            if(stack[stack.length - 1] === '[') {
                stack.pop();
                sum === 0 ? stack.push(3) : stack.push(sum * 3);
                sum = 0;
            }
            else stack.push(inputArr[i]);
        }
    }

    else {
        console.log(0);
        return;
    }
}

for(let i = 0; i < stack.length; i += 1) {
    if(stack[i] % 1 === 0) answer += stack[i];
    else {
        console.log(0);
        return;
    }
}

console.log(answer);