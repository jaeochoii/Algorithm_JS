let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split("\n").map(Number);

const N = input.shift();
let answer = -1;

let fivePack = Math.floor(N / 5);

while (fivePack >= 0) {
  let remaining = N - fivePack * 5;

  if (remaining % 3 === 0) {
    answer = remaining / 3 + fivePack;
    break;
  } else {
    fivePack -= 1;
  }
}

console.log(answer);