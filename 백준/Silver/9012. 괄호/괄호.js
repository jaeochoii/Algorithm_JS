let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const caseCount = Number(input[0]);

for (let i = 1; i <= caseCount; i += 1) {
  const cases = input[i];
  const stack =  [];
  let result = 'YES';

  for (let j = 0; j < cases.length; j += 1) {
    if (cases[j] === '(') {
      stack.push(1);
    } else {
      if (!stack.pop()) {
        result = 'NO';
        break;
      } 
    }
  }

  if (stack.length !== 0) {
    result = 'NO';
  }

  console.log(result);
}