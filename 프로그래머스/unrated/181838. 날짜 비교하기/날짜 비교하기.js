function solution(date1, date2) {
    let cnt = 0;
    for(let i=0; i<date1.length; i++){
        if(date1[i] === date2[i]){
            cnt++;
            continue;
        }
        else if(date1[i] < date2[i]) return 1;
        else if(date1[i] > date2[i]) return 0;
    }
    if(cnt === 3) return 0;
}