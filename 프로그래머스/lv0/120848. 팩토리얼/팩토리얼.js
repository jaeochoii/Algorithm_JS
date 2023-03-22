function solution(n) {
    let num = 1;
    for(let i=1; ;i++){
        num = num * i;
        if(n < num){
            return i-1;
            break;
        }
    }
}