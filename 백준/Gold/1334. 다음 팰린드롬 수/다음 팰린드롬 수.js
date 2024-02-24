let fs = require('fs');
let input =  fs.readFileSync('/dev/stdin').toString().trim();

const LENGTH = input.length;

// 숫자가 9로만 이루어져있는 경우
if ('9'.repeat(Number(LENGTH)) === input) {
    console.log(String(BigInt(input) + 2n));
    return;
}

// 숫자의 길이가 1인 경우
else if (LENGTH === 1) {
    console.log(String(BigInt(input) + 1n));
    return;
}

// 숫자의 길이가 홀수인 경우
else if (LENGTH % 2 !== 0) {
    let wordArr = input.split('');
    let index = Math.floor(wordArr.length / 2);

    for (let i = 0; i < index; i += 1) {
        wordArr[Number(LENGTH) - Number(i) - 1] = wordArr[Number(i)];
    }

    let newWord = BigInt(wordArr.join(''));

    if (BigInt(input) < newWord) {
        console.log(newWord.toString());
        return;
    } else {
        let num = '';
        for (let i = 0; i <= index; i += 1) {
            num += wordArr[i];
        }

        let newNumber = String(BigInt(num) + 1n);
        for (let i = index - 1; i >= 0; i -= 1) {
            newNumber += newNumber[i];
        }

        console.log(BigInt(newNumber).toString());
        return;
    }
}

// 숫자의 길이가 짝수인 경우
else if (LENGTH % 2 === 0) {
    let wordArr = input.split('');
    let index = LENGTH / 2;

    for (let i = 0; i < index; i += 1) {
        wordArr[Number(LENGTH) - Number(i) - 1] = wordArr[Number(i)];
    }

    let newWord = wordArr.join('');

    if (BigInt(input) < BigInt(newWord)) {
        console.log(BigInt(newWord).toString());
        return;
    } else {
        let num = '';
        for (let i = 0; i < index; i += 1) {
            num += wordArr[i];
        }
        let newNumber = String(BigInt(num) + 1n);
        let reverseNumber = newNumber.split('').reverse().join('');

        console.log(BigInt(newNumber + reverseNumber).toString());
        return;
    }
}