function solution(numbers) {
    let answer = 0;
    let count = 0;
    for(let i=0; i<numbers.length; i++) {
        answer = answer + numbers[i];
        count = count + 1;
    }
    return answer / count;
}