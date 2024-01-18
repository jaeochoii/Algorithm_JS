let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const str = input.shift().split('');
const N = Number(input.shift());

console.log(str[N-1]);