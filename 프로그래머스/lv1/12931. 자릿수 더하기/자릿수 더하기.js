function solution(n)
{
    let result = 0;
    let str = String(n).split("");
    let answer = str.map(v => result += Number(v));
    return result;
    
}