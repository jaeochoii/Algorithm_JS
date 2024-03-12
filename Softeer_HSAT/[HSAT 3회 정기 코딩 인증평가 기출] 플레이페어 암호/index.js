const fs = require('fs');
const input = fs.readFileSync('example.txt').toString().trim().split('\n');

const ALPHABET = input[0].split('');
const KEY = input[1].split('');

// 입력으로 주어진 알파벳 키를 배열로 변환
let keyBoard = [];
let map = new Map();
let set = new Set(Array.from({ length: 26 }, (v, i) => String.fromCharCode(i + 65)));

for(let i = 0; i < KEY.length; i += 1) {
    if(map.has(KEY[i])) continue;
    else {
        keyBoard.push(KEY[i]);
        map.set(KEY[i], 1);
    }
}

for(let string of set) {
    if(string === 'J') continue;
    else if(map.has(string)) continue;
    else keyBoard.push(string);
}

// 암호화 하려는 문자를 2개씩 분리하는 작업
let privateStr = [];
let twoWords = '';

for(let i = 0; i < ALPHABET.length; i += 1) {
    if(twoWords.length === 0 && i !== ALPHABET.length - 1) twoWords = ALPHABET[i];
    else if(twoWords.length === 0 && i === ALPHABET.length - 1) {
        twoWords = ALPHABET[i];
        twoWords += 'X';
        privateStr.push(twoWords);
    }
    else {
        if(ALPHABET[i] === twoWords && ALPHABET[i] !== 'X') {
            twoWords += 'X';
            i -= 1;
            privateStr.push(twoWords);
            twoWords = '';
        }
        else if(ALPHABET[i] === twoWords && ALPHABET[i] === 'X') {
            twoWords += 'Q';
            i -= 1;
            privateStr.push(twoWords);
            twoWords = '';
        }
        else {
            twoWords += ALPHABET[i];
            privateStr.push(twoWords);
            twoWords = '';
        }
    }
}

let answer = '';

for(let i = 0; i < privateStr.length; i += 1) {
    const [F, R] = privateStr[i].split('');
    const fIndex = keyBoard.indexOf(F);
    const rIndex = keyBoard.indexOf(R);

    const [fX, fY] = [Math.floor(fIndex / 5), fIndex % 5];
    const [rX, rY] = [Math.floor(rIndex / 5), rIndex % 5];

    if(fX === rX) {
        answer += keyBoard[fX*5 + (fY + 1) % 5];
        answer += keyBoard[rX*5 + (rY + 1) % 5];
    }

    else if(fY === rY) {
        answer += keyBoard[((fX + 1) % 5)*5 + fY];
        answer += keyBoard[((rX + 1) % 5)*5 + rY];
    }

    else {
        answer += keyBoard[fX*5 + rY];
        answer += keyBoard[rX*5 + fY];
    }
}

console.log(answer);
