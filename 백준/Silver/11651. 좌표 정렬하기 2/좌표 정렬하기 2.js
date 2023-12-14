const fs = require('fs');
const  input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function sortCoordinate(input){
    input.shift();
    const coords = input.map((value) => value.split(' ').map(Number));

    coords.sort((a, b) => {
        if(a[1] === b[1]) return a[0] - b[0];
        return a[1] - b[1];
    })

    let answer = '';
    coords.forEach((value) => {
        answer += value[0] + ' ' + value[1] + '\n'
    })

    console.log(answer);
}

sortCoordinate(input);