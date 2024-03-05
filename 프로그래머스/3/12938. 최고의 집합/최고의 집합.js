function solution(n, s) {
    let answer = [];
    
    if(Math.floor(s / n) === 0) return [-1];
    
    while(n >= 1) {        
        answer.push(Math.floor(s / n));
        s -= Math.floor(s / n);
        n -= 1;
    }
    
    return answer;
}