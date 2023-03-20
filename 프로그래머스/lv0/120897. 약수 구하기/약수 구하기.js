function solution(n) {
    let arr = [];
    for(let i=1; i<n+1; i++){
        if(n%i === 0){
            arr.push(i);
        }
    }
    return arr.sort((a,b) => a-b);
}