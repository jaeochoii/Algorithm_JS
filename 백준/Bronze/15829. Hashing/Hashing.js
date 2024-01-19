const fs = require('fs');
const [n, str] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const N = +n
let hash = 0;
let r = 1;
for (let i = 0; i < N; i++) {
  hash += (str.charCodeAt(i) - 96) * r
  hash %= 1234567891;
  r *= 31
  r %= 1234567891;
}

console.log(hash)