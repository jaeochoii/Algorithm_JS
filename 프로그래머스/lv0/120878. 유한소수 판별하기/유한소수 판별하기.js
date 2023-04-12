function solution(a, b) {
    const gcd = (n,m) => n%m === 0 ? m : gcd(m,n%m);
    b = b/gcd(a,b);
    
    while(b%2 === 0) b = b/2;
    while(b%5 === 0) b = b/5;
    
    return b === 1 ? 1 : 2;
}