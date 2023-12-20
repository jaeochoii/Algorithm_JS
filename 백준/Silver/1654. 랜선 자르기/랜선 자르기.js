const fs = require('fs');
const  input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [total, count] = input.shift().split(' ').map(Number);
function lanLine(input) {
    const numberArr = input.map(Number).sort((a,b) => b-a);

    let startIndex = 1;
    let endIndex = numberArr[0];
    let midNum = endIndex;

    while(true) {
        let cnt = 0;

        numberArr.forEach((value) => {
            cnt += Math.floor(value / midNum);
        })

        if(cnt < count) {
            endIndex = midNum;
        }

        else if(cnt >= count) {
            startIndex = midNum;
        }

        midNum =  Math.floor((startIndex + endIndex) / 2);

        if(startIndex === midNum) break;
    }
    console.log(midNum)
}

lanLine(input);