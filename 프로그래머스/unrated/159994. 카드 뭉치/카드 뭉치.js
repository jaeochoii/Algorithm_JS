function solution(cards1, cards2, goal) {
    while(goal.length > 0){
        if(cards1[0] === goal[0]){
            cards1.shift();
            goal.shift();
        }
        else if(cards2[0] === goal[0]){
            cards2.shift();
            goal.shift();
        }
        else return "No";
    }
    return "Yes";
}