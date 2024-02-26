let fs = require('fs');
let input =  fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input.shift());
let command = [];
input.forEach((value) => command.push(value.split(' ')));

let result = [];
for(let i = 0; i < command.length; i += 1) {
    const [order, value, time] = command[i];


    // 명령어가 type인 경우
    if(order === 'type') {
        if(i === 0) result.push([value, Number(time)]);
        else result.push([result[result.length - 1][0] + value, Number(time)]);
    }

    // 명령어가 undo인 경우
    else if(order === 'undo') {
        let newValue;

        const minus = Number(time) - Number(value);

        for(let j = 0; j < result.length; j += 1) {
            const [v, t] = result[j];

            if(minus - 1 >= t) {
                newValue = v;
            }

            else {
                break;
            }
        }

        if(newValue) result.push([newValue, Number(time)]);
        else result.push(['', Number(time)]);
    }
}

console.log(result[result.length - 1][0]);