function solution(a, b) {
    if(+(String(a)+String(b)) >= 2*a*b) return +(String(a)+String(b));
    else return 2*a*b;
}