function solution(my_string) {
    let arr = [...my_string];
    const set = new Set(arr);
    const newArr = [...set];
    return newArr.join("");
}