const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let inputData = input.shift().split(' ');

let K = BigInt(inputData[0]);
const P = inputData[1];
const N = inputData[2];

for(let i = 1; i <= N; i++) {
	K *= BigInt(P);
	K %= BigInt(1000000007);
}

console.log(Number(K));
