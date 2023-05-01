function solution(strArr) {
    let arr = [];
    for(let i=0; i<strArr.length; i++){
        if(strArr[i].indexOf("ad") === -1) arr.push(strArr[i]);
    }
    return arr;
}