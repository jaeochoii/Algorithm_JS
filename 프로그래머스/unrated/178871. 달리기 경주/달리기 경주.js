function solution(players, callings) {
    let found;
    let tmp;
    let obj = {};
    
    for(let i=0; i<players.length; i++){
        obj[players[i]] = i;
    }
    
    for(let i=0; i<callings.length; i++){
        found = obj[callings[i]];
        tmp = players[found-1];
        
        players[found-1] = callings[i];
        players[found] = tmp;
        
        obj[callings[i]] = found-1;
        obj[tmp] = found;
    }
    return players;
}