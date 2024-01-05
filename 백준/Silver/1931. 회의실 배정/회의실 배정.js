const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();

const timeArr = input.map(value => value.split(' ').map(Number)).sort((a, b) => {
    if(a[0] === b[0]) return a[1] - b[1];
    return a[0] - b[0];
});

let answer = [];

let startH = timeArr[timeArr.length - 1][0];
answer.push(timeArr.pop());

for(let i = timeArr.length - 1; i >= 0; i -= 1) {
  if(timeArr[timeArr.length - 1][1] <= startH) {
      startH = timeArr[timeArr.length - 1][0];
      answer.push(timeArr.pop());
  }
  else timeArr.pop();
}

console.log(answer.length);