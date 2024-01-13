const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [S, T] = input;
let compareArr = T.split('');

while(compareArr.length > S.length) {
    if(compareArr[compareArr.length -1] === 'A') compareArr.pop();
    else if(compareArr[compareArr.length -1] === 'B') {
        compareArr.pop();
        compareArr = compareArr.reverse();
    }
}

const answer = compareArr.join('') === S ? 1 : 0;
console.log(answer);
