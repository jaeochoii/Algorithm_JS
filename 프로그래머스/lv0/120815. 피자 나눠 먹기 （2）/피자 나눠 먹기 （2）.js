function solution(n) {
    let answer;
    for(let i=1; ;i++){
        if((6*i)%n === 0){
            answer = i;
            break;
        }
    }
    return answer;
}