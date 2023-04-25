function solution(a, b) {
    let str1 = String(a) + String(b);
    let str2 = String(b) + String(a);
    if(Number(str1) < Number(str2)) return Number(str2);
    else return Number(str1);
}