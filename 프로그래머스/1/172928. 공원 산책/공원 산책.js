function solution(park, routes) {
    const xLen = park.length;
    const yLen = park[0].length;
    let X, Y;
    
    for(let i = 0; i < xLen; i += 1) {
        for(let j = 0; j < yLen; j += 1) {
            if(park[i][j] === 'S') [X, Y] = [i, j];
        }
    }
    
    for(let i = 0; i < routes.length; i += 1) {
        const [way, move] = routes[i].split(' ');
        let isTrue = true;
        
        if(way === 'N') {
            for(let j = 1; j <= +move; j += 1) {
                const [aX, aY] = [X-j, Y];
                if(aX < 0 || aX >= xLen || aY < 0 || aY >= yLen || park[aX][aY] === 'X') {
                    isTrue = false;
                    break;
                }
            }
            if(isTrue) [X, Y] = [X - Number(move), Y];
        }
        
        else if(way === 'S') {
            for(let j = 1; j <= +move; j += 1) {
                const [aX, aY] = [X+j, Y];
                if(aX < 0 || aX >= xLen || aY < 0 || aY >= yLen || park[aX][aY] === 'X') {
                    isTrue = false;
                    break;
                }
            }
            if(isTrue) [X, Y] = [X + Number(move), Y];
        }
        
        else if(way === 'W') {
            for(let j = 1; j <= +move; j += 1) {
                const [aX, aY] = [X, Y-j];
                if(aX < 0 || aX >= xLen || aY < 0 || aY >= yLen || park[aX][aY] === 'X') {
                    isTrue = false;
                    break;
                }
            }
            if(isTrue) [X, Y] = [X, Y - Number(move)];
        }
        
        else if(way === 'E') {
            for(let j = 1; j <= +move; j += 1) {
                const [aX, aY] = [X, Y+j];
                if(aX < 0 || aX >= xLen || aY < 0 || aY >= yLen || park[aX][aY] === 'X') {
                    isTrue = false;
                    break;
                }
            }
            if(isTrue) [X, Y] = [X, Y + Number(move)];
        }
    }
    
    return [X, Y];
}