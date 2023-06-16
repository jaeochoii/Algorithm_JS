function solution(n, left, right) {
    let arr = [];
    for(let i=Math.floor(left/n); i<=Math.floor(right/n); i++){
        for(let j=0; j<n; j++){
            if(i === j) arr.push(i+1);
            else if(i > j) arr.push(i+1);
            else if(i < j) arr.push(j+1);
        }
    }
    return arr.splice(left%n, right-left+1);
}