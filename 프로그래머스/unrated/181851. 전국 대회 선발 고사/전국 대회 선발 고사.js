function solution(rank, attendance) {
    let answer = [];
    for(let i=0;i<rank.length;i++){
        if(attendance[i]) answer.push(rank[i]);
    }
    answer.sort((a,b) => a - b);
    function Participant(idx){
        return rank.indexOf(answer[idx]);
    }
    return 10000 * Participant(0) + 100 * Participant(1) + Participant(2);
}