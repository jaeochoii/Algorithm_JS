const fs = require('fs');
const  input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function cardGame(input){
    const userCard = input[1].split(' ');
    const answerCard = input[3].split(' ');

    let answer = [];
    let cardManage = {};

    userCard.forEach((value) => {
        cardManage[value] ? cardManage[value] += 1 : cardManage[value] = 1;
    })

    answerCard.forEach((value) => {
        cardManage[value] ? answer.push(cardManage[value]) : answer.push(0);
    })

    console.log(answer.join(' '));
}

cardGame(input);