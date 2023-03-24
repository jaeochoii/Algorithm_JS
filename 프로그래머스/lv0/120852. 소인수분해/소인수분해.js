function solution(n) {
    let arr = [];
    for(let i=2; i<=n; i++){
        let cnt = 0;
        if(n%i === 0){
            for(let j=1; j<i; j++){
                if(i%j === 0){
                    cnt++;
                }
            }
            if(cnt === 1){
               arr.push(i); 
            }
        }
    }
    return arr;
}