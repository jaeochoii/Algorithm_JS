function solution(arr) {
    return arr.reduce((av,v) => lcm(av,v));
}

const gcd = (a,b) => a % b ? gcd(b,a%b) : b;
const lcm = (a,b) => a * b / gcd(a,b);
