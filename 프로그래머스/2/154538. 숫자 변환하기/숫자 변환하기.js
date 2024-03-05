function solution(x, y, n) {
    let count = 0;
    
    let set = new Set();
    set.add(x);
    
    while(set.size) {
        if(set.has(y)) return count;
        let newSet = new Set();
        
        for(let value of set) {
            if(value + n <= y) newSet.add(value + n);
            
            if(value * 2 <= y) newSet.add(value * 2);
            
            if(value * 2 <= y) newSet.add(value * 3);
        }
        
        set = newSet;
        count += 1;
    }
    return -1;
}