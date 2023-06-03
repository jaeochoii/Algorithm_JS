function solution(k, score) {
    let winners = []; // winners 배열의 사이즈는 k이다. 여기에 명예의 전당 인원을 배치한다
    let Lowscore = []; // 일차마다 가장 낮은 점수를 넣는 배열
    
    for(let i=0; i<score.length; i++){
        // winners의 배열 크기가 k보다 작다면 push 작업을 하고 정렬 이후 가장 낮은 값을 Lowscore에 넣는다
        if(winners.length < k){
            winners.push(score[i]);
            winners.sort((a,b) => b-a);
            Lowscore.push(winners[winners.length-1]);
        }
        else{
            // score[i]의 값이 winners의 끝 값보다 작으면 건너뛴다
            if(score[i] < winners[winners.length-1]){
                Lowscore.push(winners[winners.length-1]);
                continue;
            }
            
            // 그렇지 않으면 winners 끝 값을 제거하고 새로운 값을 넣고 정렬한다
            else{
                winners.pop();
                winners.push(score[i]);
                winners.sort((a,b) => b-a);
                Lowscore.push(winners[winners.length-1]);                
            }
        }
    }
    return Lowscore;
}