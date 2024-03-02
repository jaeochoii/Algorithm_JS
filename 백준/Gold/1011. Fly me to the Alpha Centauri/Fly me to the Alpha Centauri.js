let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let count = Number(input[0]);
let x;
let y;
let a;
let b;

let answer = [];
for (let i = 1; i <= count; i++) {
  let splitedInput = input[i].split(" ");
  x = Number(splitedInput[0]);
  y = Number(splitedInput[1]);
  let distance = y - x;

  if (Math.sqrt(distance) % 1 === 0) {
    answer.push(2 * Math.sqrt(distance) - 1);
  } else {
    a = Math.pow(Math.ceil(Math.sqrt(y - x)), 2);
    b = Math.pow(Math.ceil(Math.sqrt(y - x)) - 1, 2) + 1;

    if ((a + b) / 2 <= distance) {
      answer.push(2 * Math.ceil(Math.sqrt(y - x)) - 1);
    } else {
      answer.push(2 * Math.ceil(Math.sqrt(distance)) - 2);
    }
  }
  console.log(answer[answer.length - 1]);
}