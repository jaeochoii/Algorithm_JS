let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
const N = Number(input.shift());
const STRING = input[1];
let str = 'I';
for(let i = 0; i < N; i += 1) {
    str += 'O';
    str += 'I';
}

function KMPOccurrenceCount(origin, keyword) {
    let originalArr = origin.split('');
    let keywordArr = keyword.split('');
    let failureArr = Array(keywordArr.length).fill(0);

    // failure 배열 세팅
    for (let i = 1, j = 0; i < keywordArr.length; i += 1) {
        while (j > 0 && keywordArr[i] !== keywordArr[j]) {
            j = failureArr[j - 1];
        }
        if (keywordArr[i] === keywordArr[j]) {
            j += 1;
        }
        failureArr[i] = j;
    }

    // 비교 및 카운트 시작
    let count = 0;
    let j = 0;
    for (let i = 0; i < originalArr.length; i++) {
        while (j > 0 && originalArr[i] !== keywordArr[j]) {
            j = failureArr[j - 1];
        }
        if (originalArr[i] === keywordArr[j]) {
            if (j === keywordArr.length - 1) {
                // 키워드가 완전히 일치할 때
                count++;
                j = failureArr[j];
            } else {
                j += 1;
            }
        }
    }

    return count;
}

console.log(KMPOccurrenceCount(STRING, str));