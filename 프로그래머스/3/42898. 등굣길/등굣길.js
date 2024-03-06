function solution(m, n, puddles) {
    const P = 1000000007;
    
    let board = Array.from({length: n+1}, () => Array(m+1).fill(0));
    let visited = Array.from({length: n+1}, () => Array(m+1).fill(0));
    
    for(let i = 0; i < puddles.length; i += 1) {
        const [y, x] = puddles[i];
        board[x][y] = 'X';
    }
    
    visited[1][1] = 1;
    
    for(let i = 1; i <= n ; i += 1) {
        for(let j = 1; j <= m; j += 1) {
            if((i === 1 && j === 1) || board[i][j] === 'X') continue;
            else {
                visited[i][j] = (visited[i-1][j] + visited[i][j-1]) % P;
            }
        }
    }
    
    return visited[n][m];
}