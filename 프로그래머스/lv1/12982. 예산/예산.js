function solution(d, budget) {
    let sum = 0;
    let count = 0;
    d.sort((a,b) => a-b);
    for(let i=0; i<d.length; i++){
        sum += d[i];
        if(sum <= budget) count++;
        else break;
    }
    return count;
}