function solution(myString) {
    let cnt = 0;
    let arr = [...myString];
    let newArr = [];
    
    for(let i=0; i<arr.length; i++){
        if(arr[i] !== "x") cnt++;
        else {
            newArr.push(cnt);
            cnt = 0;
        }
        
        if(i === arr.length-1) newArr.push(cnt);
    }
    
    return newArr;
}