function solution(n) {
    let answer = '';
    const mod = ['4', '1', '2'];
    
    while(n > 0) {
        answer = mod[n%3] + answer;
        n = Math.floor((n-1) / 3);
    }
    
    return answer;
}