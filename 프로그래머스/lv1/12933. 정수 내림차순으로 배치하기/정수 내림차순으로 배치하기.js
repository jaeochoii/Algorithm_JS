function solution(n) {
    let str = n + "";
    let newArr = str.split("").sort().reverse().join("");
    return +newArr;
}