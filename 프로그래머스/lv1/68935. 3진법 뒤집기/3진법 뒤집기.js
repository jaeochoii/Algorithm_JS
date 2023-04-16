function solution(n) {
    let str = n.toString(3);
    let arr = [...str];
    arr.reverse();
    let ans = arr.join('');
    return +(parseInt(ans,3).toString(10));
}