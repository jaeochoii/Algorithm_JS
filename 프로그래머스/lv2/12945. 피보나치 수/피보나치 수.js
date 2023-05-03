function solution(n) {
    let result = [];
    for(let i =0; i <= n;i++){
        if ( i == 0 ){
            result.push(0)
        }
        if (i == 1){
            result.push(1)
        }
        if (i >=2){
            let sum = result[i-2] + result[i-1];
            result.push(sum % 1234567)
        }
    }
    let answer = result[n] % 1234567
    return answer;
}