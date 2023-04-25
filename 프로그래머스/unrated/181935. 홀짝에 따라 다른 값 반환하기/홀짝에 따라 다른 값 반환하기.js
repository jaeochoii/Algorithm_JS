function solution(n) {
    let sum = 0;
    for(let i=0; i<=n; i++){
         if(n%2 !== 0){
             if(i%2 !== 0){
                 sum += i;
             }
         }else{
             if(i%2 === 0){
                 sum += i*i;
             }
         }   
    }
    return sum;
}