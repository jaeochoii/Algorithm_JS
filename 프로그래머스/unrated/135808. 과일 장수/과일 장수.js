function solution(k, m, score) {
    let stack = [];
    let cost = 0;
    
    // k보다 큰 수는 모두 제외시키기
    for(let i=0; i<score.length; i++){
        if(score[i] > k){
            score.splice(i,1);
            i--;
        }
    }
    
    // 내림차순으로 배열 재정렬
    score.sort((a,b) => b-a);
    
    // 스택에 m번째 원소값 집어넣기
    for(let i=0; i<score.length; i++){
        if((i+1)%m === 0) stack.push(score[i]);
    }
    
    // 스택 안에 원소값 모두 더하기
    for(let i=0; i<stack.length; i++){
        cost += stack[i];
    }
    
    return cost * m;
}