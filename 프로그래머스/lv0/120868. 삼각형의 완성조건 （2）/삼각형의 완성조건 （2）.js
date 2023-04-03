function solution(sides) {
    sides.sort((a,b) => a-b);
    let cnt = 0;
    for(let i=sides[1]; i<sides[0]+sides[1]; i++){
        cnt++;
    }
    for(let i=sides[1]-sides[0]+1; i<sides[1]; i++){
        cnt++;
    }
    return cnt;
}