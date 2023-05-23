function solution(a, b, n) {
    let result = 0;
    let k;
    let glassCoke = n;
    
    while(glassCoke >= a){
        n = Math.floor(glassCoke/a) * b;
        result += n;
        k = Math.floor(glassCoke%a);
        glassCoke = n+k;
    }
    
    return result;
}