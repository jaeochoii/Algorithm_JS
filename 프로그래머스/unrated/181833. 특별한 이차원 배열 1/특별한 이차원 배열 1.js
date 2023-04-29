function solution(n) {
    let arr = [];
    let ar = [];
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            if(i === j) ar.push(1);
            else ar.push(0);
        }
        arr.push(ar);
        ar = [];
    } 
    return arr;
}