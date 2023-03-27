function solution(n) {
    let arr = [...String(n)];
    arr.sort((a,b) => (b-a));
    let str = arr.join();
    let answer = arr.join("");
    return Number(answer);
}