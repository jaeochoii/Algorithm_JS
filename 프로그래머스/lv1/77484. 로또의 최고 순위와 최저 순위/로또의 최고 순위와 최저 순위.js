function solution(lottos, win_nums) {
    let cnt = 0;
    let countZ = 0;
    let bestScore;
    let worstScore;
    
    for(let i=0; i<6; i++){
        if(lottos[i] === 0) countZ++;
        for(let j=0; j<6; j++){
            if(lottos[i] === win_nums[j]) cnt++;
        }
    }
    bestScore = cnt + countZ;
    worstScore = cnt;
    
    if(bestScore === 0 && worstScore === 0) return [6, 6];
    else if(worstScore === 0) return [7-bestScore, 6];
    else return [7-bestScore, 7-worstScore];

}