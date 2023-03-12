function solution(n){
    let count = 0;
    let str = String(n);
    let newArr = Array.from(str);
    for(let i=0; i<newArr.length; i++){
        count = count + Number(newArr[i]);
    }
    return count;
}