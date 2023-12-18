const fs = require('fs');
const  input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = input.shift();

function printResult(input){
    let answer = [];

    answer.push(calculateAverage(input));
    answer.push(calculateMedian(input));
    answer.push(calculateMode(input));
    answer.push(calculateRange(input));

    console.log(answer.join("\n"));
}

function calculateAverage(input) {
    const numberArr = input.map(Number);

    let add = numberArr.reduce((acc, cur) => {
        return acc + cur;
    }, 0);

    return Math.round(add / N);
}

function calculateMedian(input) {
    const numberArr = input.map(Number);

    const arr = numberArr.sort((a,b) => a-b);
    const index = Math.floor(N / 2);

    return arr[index];
}

function calculateMode(input) {
    let obj = {};

    input.forEach((value) => {
        obj[value] ? obj[value] += 1 : obj[value] = 1
    })

    const entries = Object.entries(obj);

    entries.sort((a, b) => b[1] - a[1]);

    const sortNumber = entries.map(num => Number(num[0]));
    const modeNumber = entries.map(num => num[1]);

    let maxNumber = modeNumber[0];
    let maxNumbers = [];

    modeNumber.forEach((value, index) => {
        if(value === maxNumber) maxNumbers.push(sortNumber[index]);
    })

    return maxNumbers.length !== 1 ? maxNumbers.sort((a,b) => a-b)[1] : maxNumbers[0];
}

function calculateRange(input) {
    const numberArr = input.map(Number);

    const arr = numberArr.sort((a,b) => a-b);

    return arr[arr.length - 1] - arr[0];
}

printResult(input);