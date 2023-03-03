function solution(n) {
    let count = 0;
    if(n%7 != 0){
        count = Math.floor(n/7) + 1;
    } else {
        count = Math.floor(n/7);
    }
    return count;
}