const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    num1 = Number(input[0]);
    num2 = Number(input[1]);
    number = num1 + num2;
    console.log(num1 + " + " + num2 + " = " + number);
});