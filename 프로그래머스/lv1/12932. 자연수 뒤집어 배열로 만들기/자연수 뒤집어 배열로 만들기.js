function solution(n) {
    let str = String(n).split("");
    let arr = [...str];
    let newArr = [];
    for(let i=arr.length-1; i>=0; i--){
        newArr.push(Number(arr[i]));
    }
    return newArr;
}