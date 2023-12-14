const fs = require('fs');
const  input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

function orderAge(input) {
    input.shift();

    const answerArr = input.sort((a, b) => {
        let aAge = a.split(' ')[0];
        let bAge = b.split(' ')[0];

        return aAge - bAge;
    })

    console.log(answerArr.join('\n'));
}

orderAge(input);

