function solution(left, right) {
    let cnt = 0;
    let result = 0;
    for(let i=left; i<= right; i++){
        for(j=1; j<i+1; j++){
            if(i%j === 0){
                cnt++;
            }
        }
        if(cnt%2 === 0){
            result += i;
        }else{
            result -= i;
        }
        cnt = 0;
    }
    return result;
}