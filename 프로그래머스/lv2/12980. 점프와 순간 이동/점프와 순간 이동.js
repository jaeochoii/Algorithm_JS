function solution(n){
    let k = 0;
    
    for(let i=n; i >= 1; i /= 2){
        if(i%2 !== 0){
            k++;
            i -= 1;
        }
    }
    
    return k;
}