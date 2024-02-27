const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, P] = input.shift().split(' ').map(Number);
const stringArr = input.shift();

const [A, C, G, T] = input.shift().split(' ').map(Number);

let answer = 0;
let countDNA = [0, 0, 0, 0];

// 초기 윈도우 설정
for (let i = 0; i < P; i++) {
    if (stringArr[i] === 'A') countDNA[0]++;
    else if (stringArr[i] === 'C') countDNA[1]++;
    else if (stringArr[i] === 'G') countDNA[2]++;
    else if (stringArr[i] === 'T') countDNA[3]++;
}

// 초기 윈도우에 대한 검사
if (countDNA[0] >= A && countDNA[1] >= C && countDNA[2] >= G && countDNA[3] >= T) answer++;

// 슬라이딩 윈도우로 나머지 부분 탐색
for (let i = P; i < N; i++) {
    // 이전 윈도우의 첫 번째 문자 제거
    if (stringArr[i - P] === 'A') countDNA[0]--;
    else if (stringArr[i - P] === 'C') countDNA[1]--;
    else if (stringArr[i - P] === 'G') countDNA[2]--;
    else if (stringArr[i - P] === 'T') countDNA[3]--;

    // 새로운 문자 추가
    if (stringArr[i] === 'A') countDNA[0]++;
    else if (stringArr[i] === 'C') countDNA[1]++;
    else if (stringArr[i] === 'G') countDNA[2]++;
    else if (stringArr[i] === 'T') countDNA[3]++;

    // 윈도우 내의 문자들이 조건을 만족하는지 확인
    if (countDNA[0] >= A && countDNA[1] >= C && countDNA[2] >= G && countDNA[3] >= T) answer++;
}

console.log(answer);