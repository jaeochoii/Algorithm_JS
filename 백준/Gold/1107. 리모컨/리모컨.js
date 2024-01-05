const fs = require('fs');
const [TARGET, n, breakBTN] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution() {

    if(TARGET === '100') return console.log(0);

    const BREAK_BTN = breakBTN?.split(' ') || [];
    let answer = Math.abs(100 - TARGET);

    for(let i = 0; i < 1000000; i += 1) {
        const str = i.toString();
        let isValid = true;

        for(let j = 0; j < str.length; j += 1) {
            if(BREAK_BTN.includes(str[j])) {
                isValid = false;
                break;
            }
        }

        if(isValid === true) answer = Math.min(answer, Math.abs(i - TARGET) + str.length);
    }

    console.log(answer);
}

solution();