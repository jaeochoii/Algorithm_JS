const fs = require('fs');
const  input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function printQueue(input){
    input.shift();

    let answer = [];

    const array = input.map((value) => value.split(' ').map(Number));

    for(let i= 0; i < array.length; i += 2){
        let count = 0;
        let location = array[i][1];
        let priorities = array[i+1];

        while(true){
            let max = Math.max(...priorities);
            let number = priorities.shift();

            if(number === max){
                count += 1;

                if(location === 0){
                    answer.push(count);
                    break;
                }

                else location--;
            }

            else{
                priorities.push(number);

                if(location === 0) location = priorities.length - 1;

                else location--;
            }
        }
    }

    console.log(answer.join('\n'));
}

printQueue(input);