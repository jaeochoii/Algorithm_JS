function solution(dirs) {
    const command = dirs.split('');
    
    let visited = Array.from({length: 21}, () => Array(21).fill(false));
    let queue = [];
        
    let count = 0;
    
    let [X, Y] = [10, 10];
        
    for(let i = 0; i < command.length; i += 1) {
        if(command[i] === 'U') {
            const [aX, aY] = [X-2, Y];
                
            if(aX < 0 || aX >= 21 || aY < 0 || aY >= 21) continue;
            
            else if(visited[aX+1][aY]) [X, Y] = [aX, aY];
            
            else {
                count += 1;
                visited[aX+1][aY] = true;
                [X, Y] = [aX, aY];
            }
        }
            
        else if(command[i] === 'D') {
            const [aX, aY] = [X+2, Y];
                
            if(aX < 0 || aX >= 21 || aY < 0 || aY >= 21) continue;
            
            else if(visited[aX-1][aY]) [X, Y] = [aX, aY];
            
            else {
                count += 1;
                visited[aX-1][aY] = true;
                [X, Y] = [aX, aY];
            }
        }
            
        else if(command[i] === 'R') {
            const [aX, aY] = [X, Y+2];
                
            if(aX < 0 || aX >= 21 || aY < 0 || aY >= 21) continue;
            
            else if(visited[aX][aY-1]) [X, Y] = [aX, aY];
            
            else {
                count += 1;
                visited[aX][aY-1] = true;
                [X, Y] = [aX, aY];
            }
        }
            
        else if(command[i] === 'L') {
            const [aX, aY] = [X, Y-2];
                
            if(aX < 0 || aX >= 21 || aY < 0 || aY >= 21) continue;
            
            else if(visited[aX][aY+1]) [X, Y] = [aX, aY];
            
            else {
                count += 1;
                visited[aX][aY+1] = true;
                [X, Y] = [aX, aY];
            }
        }
    }
    return count;
}