function solution(n) {
    let arr = [];
    for(let i=1; i<n+1; i++){
        let count = 0;
        for(let j=1; j<i+1; j++){
            if(i%j === 0){
                count++;
            }
        }
        if(count >= 3){
            arr.push(i);
        }
    }
    return arr.length;
}