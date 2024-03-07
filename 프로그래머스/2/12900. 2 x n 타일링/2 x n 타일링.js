function solution(n) {
    const P = 1000000007;
    let DP = [1, 2];
    
    for(let i = 2; i < n; i += 1) {
        DP[i] = (DP[i-1] + DP[i-2]) % P;
    }
    
    return DP[n-1];
}