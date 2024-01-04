const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();

let arr = [];

for(let i = 0; i < input.length; ) {
    let length = Number(input[i]);
    let newArr = input.slice(i+1, i+1+length).map((value) => value.split(' '));
    arr.push(newArr);
    i += length + 1;
}

let result = [];

for(let i = 0; i < arr.length; i += 1) {
    let map = new Map();

    for(let j = 0; j < arr[i].length; j += 1) {
        if(map.has(arr[i][j][1])) map.set(arr[i][j][1], map.get(arr[i][j][1]) + 1);
        else map.set(arr[i][j][1], 1);
    }

    let answer = 1;

    const valuesArray = Array.from(map.values());
    valuesArray.forEach((value) => answer *= value+1);
    result.push(answer-1);
}

console.log(result.join('\n'));