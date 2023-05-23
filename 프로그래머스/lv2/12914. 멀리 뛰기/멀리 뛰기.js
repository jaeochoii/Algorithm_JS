function solution(n) {
    let dp = [0, 1, 2];
    if( n <= 2 ) return dp[n];
    for( let i = 3; i <= n; i++){
        dp[i] = (dp[i-1] + dp[i-2]) % 1234567;
    }
    return dp[n];
}