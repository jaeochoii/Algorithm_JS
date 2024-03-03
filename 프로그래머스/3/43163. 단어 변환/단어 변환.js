function solution(begin, target, words) {
    if(!words.includes(target)) return 0;
    
    let queue = [];
    queue.push(begin);
    let visited = Array(words.length).fill(0);
    
    let count = 0;
    
    while(queue.length) {
        for(let i = 0; i < queue.length; i += 1) {
            const B = queue.shift();
        
            if(B === target) return count;
        
            for(let i = 0; i < words.length; i += 1) {
                const wordArr = words[i].split('');
                let cnt = 0;
            
                if(visited[i] !== 0) continue;
            
                for(let j = 0; j < wordArr.length; j += 1) {
                    if(B[j] === wordArr[j]) cnt += 1;
                 }
            
                if(cnt === wordArr.length - 1) {
                    visited[i] += 1;
                    queue.push(words[i]);
                }
            
            }
        }
        count += 1;
    }
}