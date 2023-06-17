function solution(X, Y) {
    let xArr = [0,0,0,0,0,0,0,0,0,0];
    let yArr = [0,0,0,0,0,0,0,0,0,0];
    
    X = X.split('').forEach(v =>xArr[v]++);
    Y = Y.split('').forEach(v =>yArr[v]++);
    
    let numArr = [];
    
    for(let i=0; i<10; i++){
        let num = Math.min(xArr[i], yArr[i]);
        for(let j=0; j<num; j++){
            numArr.push(i)
        }
    }
    
    let arr = numArr.sort((a,b) => b-a);
    if(arr[0] === 0) return "0";
    else if(arr.length === 0) return "-1";
    else return arr.join("");
}