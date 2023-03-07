function solution(money) {
    let count = Math.floor(money / 5500);
    let rest = money - (5500 * count);
    let newArray = [];
    newArray[0] = count;
    newArray[1] = rest;
    return newArray;
}