function solution(s) {
    let newArr = [];
    let arr = [...s.split(" ")];
    arr.map(v=>Number(v));
    arr.sort((a,b) => a-b);
    newArr[0] = arr[0];
    newArr[1] = arr[arr.length-1];
    let str = newArr.join(" ");
    return str;
}