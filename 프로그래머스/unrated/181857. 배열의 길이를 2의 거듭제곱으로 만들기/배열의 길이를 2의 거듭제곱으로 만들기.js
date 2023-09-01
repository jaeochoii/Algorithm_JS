function solution(arr) {
    let restLength;
    for(let i=1; i<=10; i++){
        if(arr.length === 1) return arr;
        if(arr.length === 2**i) return arr;
        if(arr.length > 2**i) continue;
        else{
            restLength = 2**i - arr.length;
            for(let i=0; i<restLength; i++){
                arr.push(0);
            }
            return arr;
        }
    }
}