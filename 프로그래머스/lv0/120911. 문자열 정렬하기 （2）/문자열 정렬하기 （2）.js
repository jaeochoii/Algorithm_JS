function solution(my_string) {
    let str = my_string.toLowerCase();
    let newArr = [...str];
    newArr.sort();
    return newArr.join("");
}