function solution(a, b, c) {
    if(a !== b && a!== c && b !== c) return a+b+c;
    else if(a === b && b === c) return (3*a) * (3*a*a) * (3*a*a*a);
    else return (a+b+c) * (a*a + b*b + c*c);
}