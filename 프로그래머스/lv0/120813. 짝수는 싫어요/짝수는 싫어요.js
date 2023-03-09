function solution(n) {
    let newArray = [];
    for(let i=1; i<n+1; i++){
        if(i%2 != 0){
            newArray.push(i);
        }
    }
    return newArray;
}