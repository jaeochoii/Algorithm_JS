function solution(n, t, m, p) {
    let answer = [];
    
    for(let i = 0; i < n; i += 1) {
        const number = i;
        answer.push(number.toString(n));
    }
    
    for(let i = n; i <= m*t; i += 1) {
        const number = i;
        const numberToStr = number.toString(n);
        
        for(let j = 0; j < numberToStr.length; j += 1) {
            answer.push(numberToStr[j]);
        }
    }
    
    let result = '';
    
    for(let i = 0; i < answer.length; i += 1) {
        if(p-1 % m === i % m) {
            if(Number(answer[i]) % 1 !== 0) result += answer[i].toUpperCase();
            else result += answer[i];
        }
        
        if(result.length === t) break;
    }
    
    return result;
}