function solution(number) {
    let sum = 0;
    let numArr = [... number];
    numArr.map(v => sum += Number(v));
    return sum%9;
}