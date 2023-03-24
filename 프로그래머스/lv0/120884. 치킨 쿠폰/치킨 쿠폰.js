function solution(chicken) {
    let cnt = 0;
    while(chicken >= 10){
        cnt += Math.floor(chicken / 10);
        chicken = Math.floor(chicken / 10) + chicken%10;
    }
    return cnt;
}