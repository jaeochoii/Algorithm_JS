let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input.shift());
const distance = input.shift().split(' ').map(Number);
let price = input.shift().split(' ').map(Number);

let minPrice = price[0];

for(let i = 1; i < N; i += 1) {
    minPrice = Math.min(minPrice, price[i]);
    price[i] = minPrice;
}

let totalCost = BigInt(0);

for(let i = 0; i < distance.length; i += 1) {
    totalCost += (BigInt(price[i]) * BigInt(distance[i]));
}

console.log(String(totalCost));