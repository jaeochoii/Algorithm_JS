const fs = require('fs');
const input = fs.readFileSync('/dev/stdin');

function card(input){

    let cardArr = [];
    let index = 0;

    for(let i = 1; i <= input; i += 1){
        cardArr.push(i);
    }

    while(cardArr[index] !== cardArr[index - 1]){
        if(cardArr.length === 1) break;
        index += 1;
        cardArr.push(cardArr[index]);
        index += 1;
    }

    console.log(cardArr[index]);
}

card(input);