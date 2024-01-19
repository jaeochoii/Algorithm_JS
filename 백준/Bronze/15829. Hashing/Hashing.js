let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
input.shift();
const array = input.shift().split('');
let alpha = [null, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let answer = 0;

for(let i = 0; i < array.length; i += 1) {
    answer += alpha.indexOf(array[i]) * 31**i;
}

console.log(answer);