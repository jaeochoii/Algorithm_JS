function solution(arr) {
    let result = 0;
    arr.map(v => result += v);
    return (result / arr.length);
}