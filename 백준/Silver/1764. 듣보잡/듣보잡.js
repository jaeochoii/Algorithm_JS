const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const Nset = new Set();
const Mset = new Set();
const answer = [];

input.forEach((el, idx) => {
  if (idx < N) {
    Nset.add(el);
  } else {
    Mset.add(el);
  }
});

Nset.forEach((el) => {
  if (Mset.has(el)) answer.push(el);
});

answer.sort();
console.log(answer.length + "\n" + answer.join("\n"));