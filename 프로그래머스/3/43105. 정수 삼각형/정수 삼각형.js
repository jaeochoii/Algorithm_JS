function solution(triangle) {
    const N = triangle.length;
    
    for(let i = 1; i < N; i += 1) {
        const LENGTH = triangle[i].length;
        
        for(let j = 0; j < LENGTH; j += 1) {
            if(j === 0) {
                triangle[i][j] += triangle[i-1][j];
            }
            
            else if(j === LENGTH - 1) {
                triangle[i][j] += triangle[i-1][j-1];
            }
            
            else {
                triangle[i][j] += Math.max(triangle[i-1][j-1], triangle[i-1][j]);
            }
        }
    }
    
    return Math.max(...triangle[N-1]);
}