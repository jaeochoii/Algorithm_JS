let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);
let coins = [];
coins.sort((a,b) => a-b);
input.forEach((value) => coins.push(Number(value)));

let DP = Array(M+1).fill(Infinity);
DP[0] = 1;

for(let i = 0; i < coins.length; i += 1) {
    for(let j = coins[i]; j <= M; j += 1) {
        if(j % coins[i] === 0 & j / coins[i] === 1) {
            DP[j] = 1;
        }
        else{
            DP[j] = Math.min(DP[j], DP[coins[i]] + DP[j - coins[i]]);
        }
    }
}
DP[M] === Infinity ? console.log(-1) : console.log(DP[M]);