function solution(strArr) {
    let cntArr = Array(31).fill(0);
    
    for(let i=0; i<strArr.length; i++){
        let length = strArr[i].length;
        cntArr[length] += 1;
    }
    let result = cntArr.sort((a,b) => b-a);
    return result[0];
}