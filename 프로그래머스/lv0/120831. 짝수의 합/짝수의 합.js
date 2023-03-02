function solution(n) {
    let answer = 0;
    for(let k=0; k<n+1; k++) {
        if(k%2 == 0) answer = answer + k;
    }
    return answer;
}