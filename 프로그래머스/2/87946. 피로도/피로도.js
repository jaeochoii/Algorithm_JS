function solution(k, dungeons) {
    let answer = 0;
    let visited = Array(dungeons.length).fill(false);
    
    function DFS(k, count) {
        for(let i = 0; i < dungeons.length; i += 1) {
            if(!visited[i] && k >= dungeons[i][0]) {
                visited[i] = true;
                DFS(k - dungeons[i][1], count+1);
                visited[i] = false;
            }
        }
        
        answer = Math.max(answer, count);
    }
    DFS(k, 0);
    return answer;
}